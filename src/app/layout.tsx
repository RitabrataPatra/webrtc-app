import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import SocketProvider from "@/providers/SocketProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A WebRTC",
  description: "A simple WebRTC app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
        >
          <SocketProvider>
          <Header />
          <SignedIn>{children}</SignedIn>

          {/* show this if user is signed out */}
          <SignedOut>
            <div className="flex items-center justify-center h-screen">
              <h1 className="text-2xl font-semibold">Please sign in to use this app</h1>
            </div>
          </SignedOut>
          </SocketProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
