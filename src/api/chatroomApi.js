import { request } from "../utils/requester"

const baseUrl = 'http://localhost:3030/api/chatrooms'

export default{
    async create(chatroomData){
        return await request(baseUrl, chatroomData);
    }
}