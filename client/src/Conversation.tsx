import {useEffect, useState} from "react";
import type {ChatInterface} from "./interface.ts";
import {useUser} from "./context.tsx";
import MessageForm from "./MessageForm.tsx";
import {useSocket} from "./SocketProvider.tsx";

function Conversation() {
  const [chats, setChats] = useState<ChatInterface[]>([])
  const {currentUser} = useUser()
  const {socket} = useSocket();

  /**
   * Get chats
   */
  useEffect(() => {
    if (!socket) return

    const handleMessage = (data: ChatInterface) => {
      setChats((prevChats: ChatInterface[]) => {
        return [...prevChats, data];
      })
    }

    socket.on("receive_message", handleMessage);

    return () => {
      socket.off("receive_message", handleMessage);
    };
  }, [socket])

  return (
    <>
      <section className="p-4 border border-5">
        <h3 className="pb-3 mb-3 border-bottom border-bottom-2">Your group chat conversation</h3>
        {chats.length ? (
          <ol className="m-0 list-unstyled">
            {chats.map((chat: ChatInterface, index: number) => {
              const {user, body, timestamp} = chat
              const formattedChatDate = new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Asia/Manila'
              }).format(new Date(timestamp));
              const isMyChatMessage = user.id === currentUser?.id

              return (
                <li key={index} className="mb-2">
                  <div
                    className={[
                      "p-3 border border-2 rounded text-white",
                      isMyChatMessage ? "bg-primary ms-auto" : "bg-secondary"
                    ].filter(Boolean).join(" ")}
                    style={{maxWidth: "65%"}}
                  >
                    <p className="mt-0 mb-1"><small><strong>{user.handle}</strong></small></p>
                    <div className="ps-3 my-2">{body}</div>
                    <p className="m-0"><small>{formattedChatDate}</small></p>
                  </div>
                </li>
              )
            })}
          </ol>
        ) : (
          <>
            <p>No messages yet</p>
          </>
        )}
        <hr/>
        <MessageForm/>
      </section>
    </>
  )
}

export default Conversation