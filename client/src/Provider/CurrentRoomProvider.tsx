import * as React from "react";
import type {ChatRoomInterface} from "../interface.ts";
import {createContext, type PropsWithChildren, useContext, useMemo, useState} from "react";
import {users} from "../data.ts";

interface ChatRoomContextInterface {
  currentRoom: ChatRoomInterface|null
  setCurrentRoom: React.Dispatch<React.SetStateAction<ChatRoomInterface|null>>
}

export const CurrentRoomContext = createContext<ChatRoomContextInterface|undefined>(undefined)

export const CurrentRoomContextProvider = ({children}: PropsWithChildren) => {
  const [currentRoom, setCurrentRoom] = useState<ChatRoomInterface | null>({
    handle: "room123",
    members: users
  })

  return (
    <CurrentRoomContext.Provider
      value={useMemo(() => (
        {currentRoom, setCurrentRoom}
      ), [currentRoom])}
    >
      {children}
    </CurrentRoomContext.Provider>
  )
}

export function useCurrentRoom() {
  const context = useContext(CurrentRoomContext);
  if (!context) {
    throw new Error("useRoom must be used within a RoomContextProvider");
  } else if (!context?.currentRoom) {
    throw new Error("No room found");
  }

  return context as ChatRoomContextInterface;
}