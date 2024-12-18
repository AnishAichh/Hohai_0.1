"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

type Message = {
  sender: 'user' | 'bot';
  profiles?: Profile[]; // Ensure profiles is an array of Profile type
  text?: string;
};

type Profile = {
  name: string;
  expertise: string;
  socialLink: string;
  topmatePage: string;
  servicesOffered: string;
  avatar: string;
  profileLink?: string; // Add profileLink to the Profile type
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState<string>('');
  const router = useRouter(); // Use Next.js router for navigation

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    setMessages((prev) => [...prev, { sender: 'user', text: input }]);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) throw new Error('Error fetching response');

      const data = await response.json();

      // If profiles are received, add a profile link with query parameter
      if (data.profiles) {
        const profilesWithLink = data.profiles.map((profile: Profile) => ({
          ...profile,
          profileLink: `/profile?profile=${encodeURIComponent(profile.name)}`, // Create a link with query parameter
        }));

        setMessages((prev) => [
          ...prev,
          { sender: 'bot', profiles: profilesWithLink },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: 'bot', text: data.response },
        ]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Sorry, I am unable to respond at the moment.' },
      ]);
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg w-full max-w-2xl mx-auto">
      <div className="flex flex-col space-y-4 overflow-y-auto p-4 max-h-96">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg ${msg.sender === 'bot' ? 'bg-blue-50' : 'bg-green-50 text-right'}`}
          >
            {msg.profiles ? (
              <div className="space-y-4">
                {msg.profiles.map((profile, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-4 p-4 border rounded-lg shadow-md bg-white cursor-pointer"
                  >
                    <img
                      src={profile.avatar}
                      alt="Avatar"
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{profile.name}</h3>
                      <p className="text-sm text-gray-600">Expertise: {profile.expertise}</p>
                      <p className="text-sm text-gray-600">Services: {profile.servicesOffered}</p>
                      {profile.socialLink && (
                        <a
                          href={profile.socialLink}
                          target="_blank"
                          className="text-blue-500 hover:underline text-sm"
                        >
                          Social Link
                        </a>
                      )}
                      {profile.topmatePage && (
                        <a
                          href={profile.topmatePage}
                          target="_blank"
                          className="text-blue-500 hover:underline text-sm ml-2"
                        >
                          Topmate Page
                        </a>
                      )}
                      {/* Add link to the profile page with the query parameter */}
                      <a
                        href={profile.profileLink}
                        className="text-blue-500 hover:underline text-sm mt-2"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>{msg.text}</p>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex space-x-2 p-2 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-lg"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Send
        </button>
      </form>
    </div>
  );
}
