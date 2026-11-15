import {createContext, useContext} from "react";
import type {ChatRoomContextInterface} from "./interface.ts";

export const RoomContext = createContext<ChatRoomContextInterface|undefined>(undefined)

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