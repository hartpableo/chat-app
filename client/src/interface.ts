import * as React from "react";

export interface ChatInterface {
  // id: number
  user: UserInterface
  body: string
  timestamp: number,
  room: ChatRoomInterface["handle"]
}

export interface UserInterface {
  id: number
  handle: string
}

export interface ChatRoomInterface {
  handle: string
  members: UserInterface[]
}

export interface ChatRoomContextInterface {
  currentRoom: ChatRoomInterface|null
  setCurrentRoom: React.Dispatch<React.SetStateAction<ChatRoomInterface|null>>
}