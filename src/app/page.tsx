import React from 'react';
import Navbar from './components/Navbar';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Women Everywhere in Tech Website!
        </h1>
        <div className="mt-8">
          <Link href="/signup">
              Join Now
          </Link>
          <Link href="/discord">
              Discord
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;