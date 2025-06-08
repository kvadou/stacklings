// src/app/page.tsx
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 via-pink-100 to-blue-200 p-4">
      <h1 className="text-6xl font-extrabold text-purple-700 mb-6 animate-bounce">
        Welcome to Stacklings!
      </h1>
      <p className="text-lg text-black mb-8 text-center max-w-xl">
        Kids learn about money and Bitcoin through fun lessons, quizzes, and rewards.
      </p>
      <Link href="/auth/signin">
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg transform hover:scale-105 transition">
          Get Started
        </button>
      </Link>
      <div className="mt-8 text-center text-sm text-black max-w-md">
        Sign up as a parent or kid and start stacking sats while learning!
      </div>
    </main>
  );
}