"use client";

import Image from "next/image";
import React from "react";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Header = () => {
  const { user } = useUser();
  // console.log(user);    
  return (
    <nav className="flex items-center justify-between p-4 border">
      {/* Logo and User Info */}
      <div className="flex items-center gap-2">
        <Image
          src={user?.imageUrl || "https://picsum.photos/40/40"} // Better fallback
          alt={`${user?.firstName || "Guest"}'s profile`}
          width={30}
          height={30}
          className="rounded-full border border-neutral-300"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-gray-800">
            {user?.firstName || "Guest"}
          </p>
        </div>
      </div>

      {/* Header Logo Area */}
      <div className="flex items-center gap-4 left-4">
        <Image src="https://webrtc.github.io/webrtc-org/assets/images/webrtc-logo-vert-retro-255x305.png" alt="logo" width={40} height={40} />
        <h2 className="text-2xl font-bold text-neutral-600">A WebRTC</h2>
      </div>

      {/* Authentication Buttons */}
      <div className="flex gap-4">
        {user ? (
          <SignOutButton>
            <Button>Sign Out</Button>
          </SignOutButton>
        ) : (
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
        )}
      </div>
    </nav>
  );
};

export default Header;
