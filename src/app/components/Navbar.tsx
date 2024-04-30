import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/signup">
            Sign Up
          </Link>
        </li>
        <li>
          <Link href="/discord">
            Discord
          </Link>
        </li>
        <li>
          <Link href="/communities">
            Communities
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;