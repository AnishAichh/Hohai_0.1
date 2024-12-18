// // /pages/profile.tsx

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { db } from '@/utils/firebaseConfig'; // Import your firebase config
// import { collection, getDocs, query, where } from 'firebase/firestore';

// // Define the types for the profile
// interface ExpertProfile {
//   firstName: string;
//   lastName: string;
//   expertise: string[];
//   avatar?: string;
//   socialLink?: string;
//   topmatePage?: string;
//   servicesOffered?: string;
// }

// interface UserData {
//   expertProfile: ExpertProfile;
// }

// const Profile = () => {
//   const router = useRouter();
//   const { fullname } = router.query; // Extract fullname from query params
//   const [expertData, setExpertData] = useState<ExpertProfile | null>(null);

//   useEffect(() => {
//     if (fullname) {
//       const fetchProfile = async () => {
//         try {
//           const usersRef = collection(db, 'users');
//           const q = query(usersRef, where('expertProfile.firstName', '==', fullname));
//           const querySnapshot = await getDocs(q);

//           if (!querySnapshot.empty) {
//             const userDoc = querySnapshot.docs[0]; // Assuming one match per profile
//             const data = userDoc.data() as UserData; // Cast to UserData
//             setExpertData(data.expertProfile);
//           } else {
//             console.error('Expert not found');
//           }
//         } catch (error) {
//           console.error('Error fetching expert profile:', error);
//         }
//       };

//       fetchProfile();
//     }
//   }, [fullname]);

//   if (!expertData) return <p>Loading profile...</p>;

//   const { firstName, lastName, expertise, avatar, socialLink, topmatePage, servicesOffered } = expertData;

//   return (
//     <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
//       <img src={avatar || '/default-avatar.png'} alt={`${firstName} ${lastName}`} width={100} height={100} />
//       <h1>{`${firstName} ${lastName}`}</h1>
//       <p><strong>Expertise:</strong> {expertise.join(', ')}</p>
//       <p><strong>Social Link:</strong> <a href={socialLink}>{socialLink}</a></p>
//       <p><strong>Topmate Page:</strong> <a href={topmatePage}>{topmatePage}</a></p>
//       <p><strong>Services Offered:</strong> {servicesOffered}</p>
//     </div>
//   );
// };

// export default Profile;
