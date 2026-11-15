import {io, Socket} from "socket.io-client";
import {createContext, type PropsWithChildren, useContext, useEffect, useState} from "react";

interface SocketContextInterface {
  socket: Socket | null
  isConnected: boolean
}

const SocketContext = createContext<SocketContextInterface>({
  socket: null,
  isConnected: false
})

export const SocketProvider = ({children}: PropsWithChildren) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const s = io("http://localhost:8095");

    s.on("connect", () => setIsConnected(true));
    s.on("disconnect", () => setIsConnected(false));

    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{socket, isConnected}}>
      {children}
    </SocketContext.Provider>
  )
}

export function useSocket() {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }

  return context;
}
