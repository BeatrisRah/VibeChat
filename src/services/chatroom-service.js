import Chatroom from "../models/Chatroom.js";
import { v2 as cloudinary } from 'cloudinary';

export default{
    async create(chatroomData, imagePath, ownerID){
        const imageRes = await cloudinary.uploader.upload(imagePath)

        return await Chatroom.create({...chatroomData, imageURL: imageRes.secure_url , owner: ownerID})
    },

    async getAll(){
        return await Chatroom.find({})
    },

    async joinChatRoom(chatroomID, userID){
        await Chatroom.findByIdAndUpdate(chatroomID, {$push: {members: userID}})
    }
}