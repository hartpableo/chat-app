import type {ChatInterface, User} from "./interface.ts";

export const dummyUsers: User[] = [
  {
    id: 1,
    handle: "@k3nj1"
  },
  {
    id: 2,
    handle: "@johndoe123"
  },
  {
    id: 3,
    handle: "@unknoVVn"
  }
]

export const dummyChats: ChatInterface[] = [
  {
    id: 123,
    user: dummyUsers[0],
    body: "hello there!",
    timestamp: Date.now()
  },
  {
    id: 333,
    user: dummyUsers[1],
    body: "Oh Hi!!",
    timestamp: Date.now()
  },
  {
    id: 144,
    user: dummyUsers[2],
    body: "hello....",
    timestamp: Date.now()
  },
  {
    id: 333,
    user: dummyUsers[1],
    body: "nice meeting you guys!",
    timestamp: Date.now()
  }
]