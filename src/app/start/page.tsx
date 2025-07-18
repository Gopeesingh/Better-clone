'use client';

import { Home, RefreshCcw, DollarSign } from 'lucide-react';

export default function StartPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF8] flex flex-col items-center px-4 py-12 text-center">
      {/* Glowing icon */}
      <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center shadow-lg shadow-green-400/50 mb-6">
        <Home className="text-white w-6 h-6" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Hi, I'm Betsy!</h2>
      <p className="text-lg md:text-xl font-semibold mb-8 text-gray-900">
        What can I help you with?
      </p>

      {/* Options */}
      <div className="flex flex-col gap-4 w-full max-w-md">
        <button className="flex items-center gap-3 border border-gray-300 px-6 py-4 rounded hover:bg-green-50 transition">
          <Home className="text-green-600 w-5 h-5" />
          <span className="text-md font-medium text-gray-900">Buying a home</span>
        </button>
        <button className="flex items-center gap-3 border border-gray-300 px-6 py-4 rounded hover:bg-green-50 transition">
          <RefreshCcw className="text-green-600 w-5 h-5" />
          <span className="text-md font-medium text-gray-900">Refinancing my mortgage</span>
        </button>
        <button className="flex items-center gap-3 border border-gray-300 px-6 py-4 rounded hover:bg-green-50 transition">
          <DollarSign className="text-green-600 w-5 h-5" />
          <span className="text-md font-medium text-gray-900">Get cash from my home</span>
        </button>
      </div>

      {/* Stats */}
      <div className="mt-12 flex flex-col md:flex-row gap-10 text-center">
        <div>
          <p className="text-2xl font-bold text-gray-900">$100B</p>
          <p className="text-sm text-gray-600 mt-1">home loans funded entirely online</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">400K</p>
          <p className="text-sm text-gray-600 mt-1">Customers who chose a Better Mortgage</p>
        </div>
      </div>
    </div>
  );
}
