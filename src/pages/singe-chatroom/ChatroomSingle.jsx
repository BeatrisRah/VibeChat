import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import chatroomApi from "../../api/chatroomApi";
import socket from "./socket";
import ChatItem from "./ChatItem";
import { useSelector } from "react-redux";



export default function ChatroomSingle({ roomName = "Chatroom" }) {
    const user = useSelector(state => state.user)
    const {chatroomId} = useParams()
    
    const [input, setInput] = useState("");

    const { data, isPending,  } = useQuery({
        queryKey: ['messages', chatroomId],
        queryFn: () => chatroomApi.getMessages(chatroomId)
    })

    useEffect(() => {
        socket.connect()

        return () => {
            socket.disconnect()
        }
    }, [chatroomId])
    

    const sendMessage = () => {
        if (input.trim()) {
          socket.emit("send_message", {
            chatroom: chatroomId,
            sender: user.id,
            content: input,
          });
          setInput("");
        }
      };
    return (
        <div className="flex flex-col mx-auto mt-24 h-[50rem] bg-base-200">

            <div className="flex flex-1 overflow-hidden">
                {/* Optional: Sidebar for participants */}
                <div className="hidden md:block w-64 bg-base-100 p-4 border-r">
                    {/* Header */}
                    <h2 className="text-xl font-bold text-pink-500 mb-4">{roomName}</h2>
                    <p className="text-md font-semibold mb-2">Participants</p>
                    <ul>
                        <li>User A</li>
                        <li>User B</li>
                    </ul>
                </div>

                {/* Chat messages and input */}
                <div className="flex-1 flex flex-col justify-between">
                    {/* Messages */}
                    {isPending && <span className="loading loading-spinner loading-md"></span>}

                    <div className="flex-1 overflow-y-auto p-4 space-y-2">

                    {data && data.map(c => <ChatItem message={c} userId={user.id}  />)}
                    {data && data.length === 0 && <p>Be the fisrt to chat...</p>}
                        
                    </div>

                    {/* Input area */}
                    <div className="p-4 bg-base-100 border-t flex items-center gap-2">
                        <input
                        className="input input-bordered w-full"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Write a message..."
                        />
                        <button onClick={sendMessage}>Send</button>

                    </div>
    
                </div>
            </div>
        </div>
    );
}