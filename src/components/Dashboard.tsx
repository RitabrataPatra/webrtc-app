import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <main>
      <div className="flex flex-col w-fit border p-2 gap-4 m-4">
        <div>
          <h1 className="text-xl font-semibold">Peers Connected</h1>
        </div>

        {/* Peer List */}
        <ul className="flex flex-col gap-2">
          <li>
            <div className="flex gap-2 items-center">
              {/* avatar */}
              <Image
                src="https://picsum.photos/40/40"
                alt="avatar"
                width={30}
                height={30}
                className="rounded-full shadow-lg border border-black"
              />
              <h4>Peer Name</h4>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Dashboard;
