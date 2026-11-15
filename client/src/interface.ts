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