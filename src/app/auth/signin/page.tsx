"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    await signIn("credentials", {
      username,
      password,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <main className="p-4 max-w-md mx-auto bg-gray-800 min-h-screen flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">Sign In</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          name="username"
          type="text"
          placeholder="Username"
          className="border border-white/50 bg-white/10 text-white placeholder-white p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border border-white/50 bg-white/10 text-white placeholder-white p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          className="bg-[#f7931a] hover:bg-[#e67e22] text-white px-4 py-3 rounded font-semibold w-full transition"
        >
          Sign In
        </button>
      </form>
    </main>
  );
}