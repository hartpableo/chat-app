import {createContext, type PropsWithChildren, useContext, useState} from "react";
import type {UserInterface} from "../interface.ts";
import * as React from "react";
import {dummyUsers} from "../data.ts";

interface CurrentUserContextInterface {
  currentUser: UserInterface | null
  setCurrentUser: React.Dispatch<React.SetStateAction<UserInterface | null>>
}

export const CurrentUserContext = createContext<CurrentUserContextInterface | undefined>(undefined);

export const CurrentUserContextProvider = ({children}: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<UserInterface | null>(dummyUsers[1])

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error("useUser must be used within a CurrentUserContextProvider");
  }

  return context;
}

