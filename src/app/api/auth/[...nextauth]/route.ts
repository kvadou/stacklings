// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // 👇 Replace with your real auth logic (fetch from DB, Sanity, etc.)
        if (
          credentials?.username === "parent" &&
          credentials?.password === "password123"
        ) {
          return { id: "1", name: "Parent User", role: "parent" };
        } else if (
          credentials?.username === "kid" &&
          credentials?.password === "password123"
        ) {
          return { id: "2", name: "Kid User", role: "kid" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token, user }: { session: any; token: any; user: any }) {
      // Pass the user role to the session
      if (token) {
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };