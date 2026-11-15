import Conversation from "./Conversation.tsx";
import Sidebar from "./Sidebar.tsx";
import JoinRoomForm from "./JoinRoomForm.tsx";
import {useCurrentUser} from "./Provider/CurrentUserProvider.tsx";

function App() {
  const {currentUser} = useCurrentUser()
  const userHandle = currentUser?.handle

  return (
    <div className="container py-5">
      <div className="row">
        {userHandle ? (
          <>
            <div className="col-3">
              <Sidebar/>
            </div>
            <div className="col-9">
              <Conversation/>
            </div>
          </>
        ) : (
          <JoinRoomForm/>
        )}
      </div>
    </div>
  )
}

export default App
