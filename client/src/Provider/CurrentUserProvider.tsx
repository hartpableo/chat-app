import {createContext, type PropsWithChildren, useContext, useMemo, useState} from "react";
import type {UserInterface} from "../interface.ts";
import * as React from "react";

interface CurrentUserContextInterface {
  currentUser: UserInterface | null
  setCurrentUser: React.Dispatch<React.SetStateAction<UserInterface | null>>
}

export const CurrentUserContext = createContext<CurrentUserContextInterface | undefined>(undefined);

export const CurrentUserContextProvider = ({children}: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<UserInterface | null>(null)

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

