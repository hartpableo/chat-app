import Conversation from "./Conversation.tsx";
import {useMemo, useState} from "react";
import type {ChatRoomInterface} from "./interface.ts";
import {dummyUsers} from "./data.ts";
import {RoomContext} from "./context.tsx";
import Sidebar from "./Sidebar.tsx";

function App() {
  const [currentRoom, setCurrentRoom] = useState<ChatRoomInterface | null>({
    handle: "room123",
    members: dummyUsers
  })

  return (
    <>
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
    </>
  )
}

export default App
