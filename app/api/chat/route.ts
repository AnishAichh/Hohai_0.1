import { db } from '@/utils/firebaseConfig';
import { collection, getDocs, query, where, DocumentData } from 'firebase/firestore';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Define the type for Expert Profile
type ExpertProfile = {
  firstName?: string;
  lastName?: string;
  expertise?: string[];
  socialLink?: string;
  topmatePage?: string;
  servicesOffered?: string;
  avatar?: string;
};

// Define the type for Professional Profiles
type Professional = {
  name: string;
  expertise: string;
  socialLink: string;
  topmatePage: string;
  servicesOffered: string;
  avatar: string;
};

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Expertise keywords to match the query
    const expertiseKeywords: string[] = [
      'Cybersecurity',
      'Law',
      'Content & Branding',
      'Others',
      'HR',
      'Software',
      'Product',
      'Study Abroad',
      'Finance',
      'Design',
      'Data',
      'Astrology',
      'Mental Health & Wellbeing',
      'Marketing',
    ];

    let responseMessage: string = '';
    let responseProfiles: Professional[] = [];

    // Check for expertise-related keywords in the message
    const matchedKeyword = expertiseKeywords.find((keyword) =>
      message.toLowerCase().includes(keyword.toLowerCase())
    );

    if (matchedKeyword) {
      // Query Firestore for users with matching expertise
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('expertProfile.expertise', 'array-contains', matchedKeyword));

      console.log('Query executed for expertise:', matchedKeyword);

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No users found for expertise:", matchedKeyword);
        responseMessage = `Sorry, I couldn't find any ${matchedKeyword} professionals in the database.`;
      } else {
        // Map the response data to Professional type
        responseProfiles = querySnapshot.docs.map((doc) => {
          const data: DocumentData = doc.data();
          const profile: ExpertProfile = data.expertProfile || {};

          return {
            name: `${profile.firstName || ''} ${profile.lastName || ''}`.trim(),
            expertise: profile.expertise?.join(', ') || 'Not specified',
            socialLink: profile.socialLink || '',
            topmatePage: profile.topmatePage || '',
            servicesOffered: profile.servicesOffered || '',
            avatar: profile.avatar || '/default-avatar.png', // Fallback avatar
          };
        });
      }
    } else {
      // Fallback to Gemini API for non-expertise related queries
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

      const structuredPrompt = `
        You are a helpful assistant that provides concise, plain text responses.
        Do not use special formatting such as:
        - Markdown (e.g., **bold**, *italics*)
        - Lists, bullet points, or symbols (-, *, #)

        Respond in clean text only.

        User's query: "${message}"
      `;

      const result = await model.generateContent(structuredPrompt);
      const geminiResponse = result.response.text().replace(/[*#\-]/g, '').trim();

      responseMessage = geminiResponse || "Sorry, I couldn't understand that.";
    }

    // Send the response with proper typing
    return Response.json({
      response: responseMessage,
      profiles: responseProfiles.length > 0 ? responseProfiles : undefined,
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return Response.json(
      { response: 'Sorry, something went wrong on the server.' },
      { status: 500 }
    );
  }
}
