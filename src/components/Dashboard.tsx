"use client";
import { useSocket } from "@/context/SocketContext";
import Image from "next/image";
import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useUser } from "@clerk/nextjs";

const Dashboard = () => {
  const { onlineUsers } = useSocket();
  const { user : currentUser } = useUser(); 

  return (
    <main>
      <div className="flex flex-col w-fit border p-2 gap-2 m-4">
        <div className="flex justify-between items-center gap-2">
          <h1 className="text-xl font-semibold">Peers Connected</h1>
          <h5 className="text-md text-gray-500">
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
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                    <Image
                    src={user.profile.imageUrl}
                    alt="avatar"
                    width={30}
                    height={30}
                    className="rounded-full shadow-lg border border-black"
                  />
                    </TooltipTrigger>
                    <TooltipContent side="bottom" avoidCollisions={true}>
                      <p>{
                          user.userid === currentUser?.id ? "You" : user.profile.firstName
                        }</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
};

export default Dashboard;
