import { db } from '@/utils/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const expertiseKeywords = [
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

    let responseMessage = '';

    // Check for expertise-related keywords in the message
    const matchedKeyword = expertiseKeywords.find((keyword) =>
      message.toLowerCase().includes(keyword.toLowerCase())
    );

    if (matchedKeyword) {
      // Fetch users with matching expertise from Firestore using `array-contains`
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('expertProfile.expertise', 'array-contains', matchedKeyword));

      // Debug log for the matched keyword
      console.log('Query executed for expertise:', matchedKeyword);

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No users found for expertise:", matchedKeyword);
        responseMessage = `Sorry, I couldn't find any ${matchedKeyword} professionals in the database.`;
      } else {
        // Log the fetched documents for debugging
        querySnapshot.docs.forEach((doc) => {
          console.log('Fetched document data:', doc.data());
        });

        const experts = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          const firstName = data.expertProfile?.firstName || '';
          const lastName = data.expertProfile?.lastName || '';
          const fullName = `${firstName} ${lastName}`.trim() || 'Unknown';

          return {
            name: fullName,
            expertise: data.expertProfile?.expertise || 'Not specified',
            socialLink: data.expertProfile?.socialLink || 'Not provided',
            topmatePage: data.expertProfile?.topmatePage || 'Not available',
            servicesOffered: data.expertProfile?.servicesOffered || 'No services listed',
          };
        });

        // Format the response
        responseMessage =
          `Here are some ${matchedKeyword} professionals I found:\n\n` +
          experts
            .map(
              (expert) =>
                `${expert.name}\nExpertise: ${expert.expertise}\nSocial Link: ${expert.socialLink}\nTopmate Page: ${expert.topmatePage}\nServices Offered: ${expert.servicesOffered}`
            )
            .join('\n\n');
      }
    } else {
      // Fallback to Gemini API if no expertise keyword matches
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

    return Response.json({ response: responseMessage });
  } catch (error) {
    console.error('Error processing request:', error);
    return Response.json(
      { response: 'Sorry, something went wrong on the server.' },
      { status: 500 }
    );
  }
}
