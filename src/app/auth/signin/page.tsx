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
    <main className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input name="username" type="text" placeholder="Username" className="border p-2 w-full text-white placeholder:text-white" />
        <input name="password" type="password" placeholder="Password" className="border p-2 w-full text-white placeholder:text-white" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Sign In
        </button>
      </form>
    </main>
  );
}