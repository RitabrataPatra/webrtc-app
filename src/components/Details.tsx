import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SocketUser } from "../../types";

const Details = ({ user }: { user: SocketUser }) => {
  return (
    <Dialog>
      <DialogTrigger>Details</DialogTrigger>
      <DialogContent className="w-fit">
        <DialogHeader className="items-center">
          <DialogTitle>
            <u>Details</u>
          </DialogTitle>
          <hr />

          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <p className="font-semibold">Name:</p>
              <p>
                {user.profile.firstName} {user.profile.lastName}
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-semibold">Email:</p>
              <p>{user.profile.emailAddresses[0].emailAddress}</p>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Details;
