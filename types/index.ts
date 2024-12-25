import { User } from "@clerk/nextjs/server";

export type SocketUser = {
    userid: string;
    socketId: string;
    profile: User;
}