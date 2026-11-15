import {useState} from "react";

function JoinRoomForm() {
  const [userHandle, setUserHandle] = useState("")

  return (
    <div className="col-12">
      <div className="card mx-auto" style={{maxWidth: "35rem"}}>
        <div className="card-body">
          <form method="post">
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