"use client"

import { Navbar } from '@/components/Navbar';
import { useState } from 'react';

const Page = () => {
  const [messages, setMessages] = useState([{ text: 'Welcome to the Crops Description Chat Bot!', sender: 'bot' }]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a bot response about crops.', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <>
    <Navbar/>
    <div className='flex flex-col items-center justify-center min-h-screen p-4 bg-white'>
      <span className='text-4xl font-semibold mb-4 text-black drop-shadow-lg'>Crops Description</span>
      <div className='w-full max-w-md border rounded-lg p-4 flex flex-col space-y-4 bg-white shadow-lg'>
        <div className='flex flex-col space-y-2 overflow-y-auto h-96'>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${
                message.sender === 'bot' ? 'bg-gray-200 self-start' : 'bg-blue-200 self-end'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className='flex space-x-2'>
          <input
            type='text'
            className='flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type your message...'
          />
          <button className='bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500' onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Page;