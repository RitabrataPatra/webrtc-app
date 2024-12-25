import { useUser } from "@clerk/nextjs";
import { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

interface iSocketContext {
    
}

export const SocketContext = createContext<iSocketContext | null>(null);

export const SocketContextProvider =  ({children} : {children: React.ReactNode}) =>{
    const {user} = useUser()
    const [socket , setSocket] = useState<Socket | null>(null);
    const[isConnected , setIsConnected] = useState(false);

    //initializing a socket
    console.log("is Socket Connected",isConnected);

    useEffect(() => {
        const newSocket =  io()
        setSocket(newSocket);
        return ()=>
        {
            newSocket.disconnect();
        }
    },[user])

    useEffect(() => {
        if (socket===null) return ;
        if (socket.connected) {
            onConnect();
          }
          function onConnect() {
            setIsConnected(true);
          }

          function onDisconnect() {
            setIsConnected(false);
          }

          socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);

        return ()=> {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
        }
        
    },[socket])

    return <SocketContext.Provider value={{}}>
        {children}
    </SocketContext.Provider>
}

export const useSockt = () => {
    const context = useContext(SocketContext);
    if (context === null) {
        throw new Error("useSocket must be used within a SocketContextProvider");
    }
    return context
}