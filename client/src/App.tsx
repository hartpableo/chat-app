import Conversation from "./Conversation.tsx";
import {useMemo, useState} from "react";
import type {ChatRoomInterface, UserInterface} from "./interface.ts";
import {dummyUsers} from "./data.ts";
import {RoomContext, UserContext} from "./context.tsx";
import Sidebar from "./Sidebar.tsx";

function App() {
  const [currentUser, setCurrentUser] = useState<UserInterface | null>(dummyUsers[1])
  const [currentRoom, setCurrentRoom] = useState<ChatRoomInterface | null>({
    handle: "room123",
    members: dummyUsers
  })

  return (
    <>
      <UserContext.Provider
        value={useMemo(() => ({currentUser, setCurrentUser}), [currentUser])}
      >
        <RoomContext.Provider
          value={useMemo(() => ({currentRoom, setCurrentRoom}), [currentRoom])}
        >
          <div className="container py-5">
            <div className="row">
              <div className="col-3">
                <Sidebar/>
              </div>
              <div className="col-9">
                <Conversation/>
              </div>
            </div>
          </div>
        </RoomContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
