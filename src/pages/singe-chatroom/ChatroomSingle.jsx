import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import chatroomApi from "../../api/chatroomApi";
import socket from "./socket";



export default function ChatroomSingle({ roomName = "Chatroom" }) {
    const {chatroomId} = useParams()
    const [message, setMessage] = useState("");

    const { data } = useQuery({
        queryKey: ['messages', chatroomId],
        queryFn: () => chatroomApi.getMessages(chatroomId)
    })

    useEffect(() => {
        socket.connect()

        return () => {
            socket.disconnect()
        }
    }, [chatroomId])
    

    const handleSend = (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        // Add logic to send message
        setMessage("");
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
                    <div className="flex-1 overflow-y-auto p-4 space-y-2">
                        {/* Replace with dynamic messages */}
                        <div className="chat chat-start">
                            <div className="chat-bubble">Hello!</div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-primary">Hey there!</div>
                        </div>
                    </div>

                    {/* Input area */}
                    <form onSubmit={handleSend} className="p-4 bg-base-100 border-t flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="input input-bordered w-full"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}