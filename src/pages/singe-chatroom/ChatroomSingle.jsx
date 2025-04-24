import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import chatroomApi from "../../api/chatroomApi";
import socket from "./socket";
import ChatItem from "./ChatItem";
import { useSelector } from "react-redux";
import { useMemo } from 'react';



export default function ChatroomSingle() {
    const user = useSelector(state => state.user)
    const { chatroomId } = useParams()

    const [liveMessages, setLiveMessages] = useState([]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);
    const messagesContainerRef = useRef(null);

    const { data, isPending, } = useQuery({
        queryKey: ['messages', chatroomId],
        queryFn: () => chatroomApi.getOne(chatroomId)
    })

    const allMessages = useMemo(() => {
        return [...(data?.messages || []), ...liveMessages];
    }, [data?.messages, liveMessages]);

    useEffect(() => {
        socket.connect()
        socket.emit("join_room", chatroomId);

        socket.on("recive_message", (message) => {
            setLiveMessages(prev => [...prev, message]);
        });

        return () => {
            socket.off("recive_message");
            socket.disconnect()
        }
    }, [chatroomId])


    const sendMessage = () => {
        if (input.trim()) {
            socket.emit("send_message", {
                chatroom: chatroomId,
                sender: user.data.id,
                content: input,
            });
            setInput("");
        }
    };

    const scrollToBottom = () => {
        if (messagesContainerRef.current && messagesEndRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
          }
      };


      useEffect(() => {
        scrollToBottom();
      }, [liveMessages]);
    return (
        <div className="flex flex-col mx-auto mt-24 h-[50rem] bg-base-200">

            <div className="flex flex-1 overflow-hidden">
                {/* Optional: Sidebar for participants */}
                <div className="hidden md:block w-64 bg-base-100 p-4 border-r">
                    {/* Header */}
                    <h2 className="text-xl font-bold text-pink-500 mb-4">{data?.chatroom.title}</h2>
                    <p className="text-md font-semibold mb-2">Participants</p>
                    <ul>
                        {data?.chatroom.members.map(m => <li key={m._id} >{m.username}</li>)}
                    </ul>
                </div>

                {/* Chat messages and input */}
                <div className="flex-1 flex flex-col justify-between">
                    {/* Messages */}
                    {isPending && <span className="loading loading-spinner loading-md"></span>}

                    <div className="flex-1  h-[calc(100vh-10rem)]  overflow-y-auto p-4 space-y-2" ref={messagesContainerRef} >
                        {allMessages.length === 0 && <p>Be the first to chat...</p>}
                        {allMessages.map((msg) => (

                            <ChatItem key={msg._id} message={msg} userId={user.data.id} />
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input area */}
                    <div className="p-4 bg-base-100 border-t flex items-center gap-2">
                        <input
                            className="input input-bordered w-full"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    // e.preventDefault();
                                    sendMessage();
                                }
                            }}
                            placeholder="Write a message..."
                        />
                        <button onClick={sendMessage}>Send</button>

                    </div>

                </div>
            </div>
        </div>
    );
}