import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {SocketProvider} from "./Provider/SocketProvider.tsx";
import {CurrentUserContextProvider} from "./Provider/CurrentUserProvider.tsx";
import {CurrentRoomContextProvider} from "./Provider/CurrentRoomProvider.tsx";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SocketProvider>
      <CurrentUserContextProvider>
        <CurrentRoomContextProvider>
          <App/>
        </CurrentRoomContextProvider>
      </CurrentUserContextProvider>
    </SocketProvider>
  </StrictMode>,
)
