import Conversation from "./Conversation.tsx";
import {createContext, useContext, useMemo, useState} from "react";
import type {UserInterface} from "./interface.ts";
import {dummyUsers} from "./data.ts";
import * as React from "react";

export const UserContext = createContext<{
  currentUser: UserInterface|null
  setCurrentUser: React.Dispatch<React.SetStateAction<UserInterface|null>>
}|undefined>(undefined);

function App() {
  const [currentUser, setCurrentUser] = useState<UserInterface|null>(dummyUsers[1])
  const contextValue = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser]);

  return (
    <>
      <UserContext.Provider value={contextValue}>
        <div className="container py-5">
          <div className="row">
            <div className="col-2">
              sidebar
            </div>
            <div className="col-10">
              <Conversation/>
            </div>
          </div>
        </div>
      </UserContext.Provider>
    </>
  )
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}

export default App
