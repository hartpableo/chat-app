import {useState} from "react";
import * as React from "react";
import {users} from "./data.ts";
import {useCurrentUser} from "./Provider/CurrentUserProvider.tsx";

function JoinRoomForm() {
  const [userHandle, setUserHandle] = useState("")
  const {setCurrentUser} = useCurrentUser()

  const joinRoom = (event: React.SubmitEvent) => {
    event.preventDefault()

    if (!userHandle.length) return

    const user = users.find(d => d.handle === userHandle)
    if (!user) {
      alert("That handle is not in our records")
      setUserHandle("")
      return
    }

    setCurrentUser(user)
    setUserHandle("")
  }

  return (
    <div className="col-12">
      <div className="card mx-auto" style={{maxWidth: "35rem"}}>
        <div className="card-body">
          <form method="post" onSubmit={joinRoom}>
            <input
              className="form-control"
              type="text"
              id="user-handle"
              placeholder="Enter your username or handle..."
              aria-label="Username/Handle"
              value={String(userHandle)}
              onChange={event => setUserHandle(event.target.value)}
            />
            <button type="submit" className="btn btn-primary mt-3">Join</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default JoinRoomForm