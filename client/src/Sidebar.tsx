import {useCurrentRoom} from "./Provider/CurrentRoomProvider.tsx";

function Sidebar() {
  const {currentRoom} = useCurrentRoom()

  if (!currentRoom) {
    throw new Error("Room not found")
  }

  const {handle, members} = currentRoom

  return (
    <aside className="p-3 border border-5">
      <h5>{handle}</h5>
      <p>{members.length} members</p>
      <hr/>
      {members.length && (
        <ul>
          {members.map((member, index) => {
            return (
              <li key={index}>{member.handle}</li>
            )
          })}
        </ul>
      )}
    </aside>
  )
}

export default Sidebar