export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] flex flex-col justify-center items-center text-center px-4 md:px-8">
      <h2 className="text-lg md:text-xl font-medium text-green-600 mb-4">Our mission</h2>
      <p className="text-3xl md:text-4xl font-semibold text-gray-900 max-w-3xl leading-snug">
        We’re making homeownership simpler, faster —
        <br className="hidden md:block" />
        and most importantly, more accessible for all Americans.
      </p>
    </div>
  );
}

