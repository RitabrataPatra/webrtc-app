"use client";
import { useSocket } from "@/context/SocketContext";
import Image from "next/image";
import React from "react";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { InfoIcon, PhoneCall } from "lucide-react";
import Details from "./Details";
// import { Dialog, DialogTrigger } from "./ui/dialog";
import Link from "next/link";

// import { useUser } from "@clerk/nextjs";

const Dashboard = () => {
  const { onlineUsers } = useSocket();
  // const { user: currentUser } = useUser();

  return (
    <main className="flex justify-center max-h-screen items-center">
      <div className="flex flex-col w-fit border p-4 gap-4 m-4 rounded-lg">
        <div className="flex justify-center items-center gap-4">
          <h1 className="text-5xl font-semibold">Peers Connected</h1>
          <h5 className="text-lg text-gray-500">
            {onlineUsers && onlineUsers.length > 1
              ? onlineUsers.length
              : "Only you"}
          </h5>
        </div>

        {/* Peer List */}
        <ul className="flex flex-row gap-2">
          {onlineUsers &&
            onlineUsers.map((user) => (
              <li key={user.userid}>
                {/* avatars/users that are connected */}

                <ContextMenu>
                  <ContextMenuTrigger>
                    <Image
                      src={user.profile.imageUrl}
                      alt="avatar"
                      width={100}
                      height={100}
                      className="rounded-full shadow-lg border border-black"
                    />
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem className="cursor-pointer text-lg text-green-700 gap-3">
                      <PhoneCall />
                      <span>Call</span>
                    </ContextMenuItem>

                    <ContextMenuItem className="cursor-pointer text-lg text-orange-700 gap-3">
                      <Link href={`/`} className="flex gap-3">
                        <InfoIcon />
                        <Details user={user} />
                      </Link>
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
};

export default Dashboard;
