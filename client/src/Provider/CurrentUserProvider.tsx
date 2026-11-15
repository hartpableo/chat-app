import {createContext, type PropsWithChildren, useContext, useMemo, useState} from "react";
import type {UserInterface} from "../interface.ts";
import * as React from "react";
import {dummyUsers} from "../data.ts";

interface CurrentUserContextInterface {
  currentUser: UserInterface | null
  setCurrentUser: React.Dispatch<React.SetStateAction<UserInterface | null>>
}

export const CurrentUserContext = createContext<CurrentUserContextInterface | undefined>(undefined);

export const CurrentUserContextProvider = ({children}: PropsWithChildren) => {
  // @todo: implement auth
  const [currentUser, setCurrentUser] = useState<UserInterface | null>(dummyUsers[1])

  return (
    <CurrentUserContext.Provider
      value={useMemo(() => (
        {currentUser, setCurrentUser}
      ), [currentUser])}
    >
      {children}
    </CurrentUserContext.Provider>
  )
}

export function useCurrentUser() {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error("useCurrentUser must be used within a CurrentUserContextProvider");
  }

  return context;
}

