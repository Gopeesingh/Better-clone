// app/page.tsx
import { Clock } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-[hsl(163,100%,14%)] text-white flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          The first <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-purple-500 to-pink-500">
            AI-powered Mortgage
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl">
          Our tech unlocks lower rates, higher chances of approval, <br />
          and a lightning-fast process from approval to closing. Over $100 billion funded.
        </p>

        <button className="mt-8 bg-green-400 hover:bg-green-500 text-black text-lg font-medium px-8 py-4 rounded-full">
          Start my pre-approval
        </button>

        <div className="flex items-center gap-2 mt-4 text-sm text-white/80">
          <Clock size={16} />
          <span>3 min</span>
          <span>•</span>
          <span>No hard credit check</span>
        </div>
      </main>
    </>
  );
}

