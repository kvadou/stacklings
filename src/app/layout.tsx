import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stacklings",
  description: "Learn to Earn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Learn to Earn" />
        <meta property="og:description" content="Kids learn about money and Bitcoin through interactive lessons, quizzes, and real Bitcoin rewards!" />
        <meta property="og:image" content="https://stacklings.com/path/to/your-image.png" />
        <meta property="og:url" content="https://stacklings.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Learn to Earn" />
        <meta name="twitter:description" content="Kids learn about money and Bitcoin through fun lessons, quizzes, and real Bitcoin rewards!" />
        <meta name="twitter:image" content="https://stacklings.com/path/to/your-image.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
