import React from "react";
import Navbar from "./components/Navbar";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-center text-4xl font-bold">
          Welcome to the Women Everywhere in Tech Website!
        </h1>
        <div>
          <p className="text-center text-2xl">
            While we're hard at work crafting an amazing website to serve you
            better, we're thrilled to invite you to join our Discord community!
            Connect with fellow women in tech, share ideas, seek support, and
            learn together.
          </p>
        </div>
        <div className="mt-8">
          {/* <Link href="/signup">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Join Now</div>
          </Link> */}
          <Link href="https://discord.gg/YpaJ3JckNM">
            <div className="rounded bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-indigo-600">
              Join Our Discord!
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
