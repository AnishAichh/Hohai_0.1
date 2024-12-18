'use client';

import { useState, FormEvent } from 'react';

type Message = {
  sender: 'user' | 'bot';
  text: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newMessages: Message[] = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) throw new Error('Error fetching response');

      const data = await response.json();

      setMessages([
        ...newMessages,
        { sender: 'bot', text: data.response },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([
        ...newMessages,
        { sender: 'bot', text: 'Sorry, I am unable to respond at the moment.' },
      ]);
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg w-full max-w-md">
      {/* Chat Messages */}
      <div className="flex flex-col space-y-4 overflow-y-auto p-4 max-h-80">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg ${msg.sender === 'bot'
                ? 'bg-blue-100 text-left'
                : 'bg-green-100 text-right'
              }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <form onSubmit={handleSubmit} className="flex space-x-2 p-2 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-lg"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
}
