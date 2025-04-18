import { io } from "socket.io-client";

const socket = io('http://localhost:3030/chatrooms', {
    autoConnect: false
})

export default socket;