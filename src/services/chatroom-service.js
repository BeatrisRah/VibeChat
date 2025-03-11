import Chatroom from "../models/Chatroom.js";

export default{
    async create(chatroomData, ownerID){
        return await Chatroom.create({...chatroomData, owner: ownerID})
    }
}