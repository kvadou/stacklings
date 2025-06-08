import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
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
    async session({ session, token }) {
      if (token && session.user) {
        session.user = { ...session.user, role: token.role as string } as {
          name?: string | null;
          email?: string | null;
          image?: string | null;
          role?: string;
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: string }).role;
      }
      return token;
    },
  },
};