import {createContext, useContext} from "react";
import type {ChatRoomContextInterface, UserInterface} from "./interface.ts";
import * as React from "react";

export const UserContext = createContext<{
  currentUser: UserInterface|null
  setCurrentUser: React.Dispatch<React.SetStateAction<UserInterface|null>>
}|undefined>(undefined);
export const RoomContext = createContext<ChatRoomContextInterface|undefined>(undefined)


export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserContextProvider");
  }

  return context;
}

export function useRoom() {
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error("useRoom must be used within a RoomContextProvider");
  } else if (!context?.currentRoom) {
    // @todo properly redirect to "create room" instead of just throwing an error
    throw new Error("No room found");
  }

  return context as ChatRoomContextInterface;
}