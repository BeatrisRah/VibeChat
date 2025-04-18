import { request } from "../utils/requester";

const baseURL = 'http://localhost:3030/api/users';


const loginAPI = async (data) => {
    return await  request(baseURL + '/login', data)
};

const registerAPI = async (data) => {
    return await request(baseURL + '/register', data)
}

const getUsersChats = async (userId) => {
    return await request(baseURL + `/${userId}/chatrooms`)
}

export default{
    loginAPI,
    registerAPI,
    getUsersChats
}