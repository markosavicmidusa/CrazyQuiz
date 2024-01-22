// Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
        <Link href="/">
            <div className="text-white text-2xl font-bold cursor-pointer" style={{ fontFamily: 'Fredoka One, cursive' }}>
              Crazy Quiz
            </div>
          </Link>
          {/* Navigation menu for smaller screens */}
          <div className="lg:hidden">
            <button className="text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          {/* Navigation menu for larger screens */}
          <ul className="hidden lg:flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/quizzes">Quizzes</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        {/* Responsive navigation menu for smaller screens */}
        <div className="hidden lg:hidden">
          <ul className="pt-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/quizzes">Quizzes</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
