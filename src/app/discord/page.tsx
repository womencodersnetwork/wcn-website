import React from 'react';
import Navbar from '../components/Navbar';

const Discord = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h1 className="text-4xl font-bold">Join our Discord</h1>
        {/* More content goes here */}
      </main>
    </div>
  );
};

export default Discord;