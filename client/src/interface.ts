export interface ChatInterface {
  id: number
  user: UserInterface
  body: string
  timestamp: number
}

export interface UserInterface {
  id: number
  handle: string
}