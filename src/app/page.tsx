import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/1.1movie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Landing Page Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 py-10 max-w-2xl">
        <h1 className="text-6xl font-extrabold text-yellow-300 mb-4">
          Stacklings
        </h1>
        <p className="text-lg text-white mb-6 leading-relaxed">
          Learn about money and Bitcoin through interactive lessons, quizzes, and rewards.
        </p>
        <Link href="/auth/signin">
          <button className="bg-[#f7931a] hover:bg-[#e67e22] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition hover:scale-105">
            Get Started
          </button>
        </Link>
        <div className="mt-6 text-base text-white max-w-md font-bold">
          Sign up as a parent and kids start stacking sats while having fun!
        </div>
      </div>
    </main>
  );
}