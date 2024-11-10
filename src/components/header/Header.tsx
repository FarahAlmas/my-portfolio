'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-gradient-to-t  from-purple-500 to-pink-500 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4 md:py-6">
        
        <h1 className="text-3xl font-bold cursor-pointer hover:text-blue-500 transition-colors duration-300">
          My Portfolio
        </h1>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        
        <nav>
          <ul
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex space-x-6 text-lg font-semibold`}
          >
            <li>
              <Link href={"/"} className="hover:text-blue-500 transition-colors duration-300">Home
              </Link>
            </li>
            <li>
              <Link href={'/projects'} className="hover:text-blue-500 transition-colors duration-300">Projects
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="hover:text-blue-500 transition-colors duration-300">Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
