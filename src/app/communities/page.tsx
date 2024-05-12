import React from "react";
import Navbar from "../components/Navbar";

const Communities = () => {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl font-bold">Welcome to the Communities Page!</h1>
        <p className="mt-4 text-lg">
          Explore the various communities and see what's happening!
        </p>
        {/* More content goes here */}
      </main>
    </div>
  );
};

export default Communities;
