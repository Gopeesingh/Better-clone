'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react'; // Optional: using Lucide icons

const Header = () => {
  return (
    <header className="bg-[rgb(14,66,52)] text-white px-6 py-4 flex items-center justify-between">
      {/* Left: Logo and Nav Links */}
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-2xl font-bold text-white">Better</Link>
        <nav className="flex space-x-6 text-sm font-medium">
          <Link href="/about-us" className="hover:underline">About Us</Link>
          <Link href="/mortgage-calculator" className="hover:underline">Mortgage Calculator</Link>
          <Link href="/start" className="hover:underline">Start</Link>
        </nav>
      </div>

      {/* Right: Phone Icon and Sign In */}
      <div className="flex items-center space-x-4">
        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-white hover:bg-green-800">
          <Phone className="w-4 h-4" />
        </button>
        <Link href="/signin" className="font-medium hover:underline">Sign in</Link>
      </div>
    </header>
  );
};

export default Header;

