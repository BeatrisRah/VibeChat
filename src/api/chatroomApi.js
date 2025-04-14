import { request } from "../utils/requester"
const baseUrl = 'http://localhost:3030/api/chatrooms'

export default{
    async create(chatroomData, user){
        return await request(baseUrl, chatroomData, user.token);
    },

    async getAll(){
        return await request(baseUrl)
    },

    async join(chatroomId, token){
        await request(baseUrl + `/${chatroomId}/join`, null ,token)
    }
}