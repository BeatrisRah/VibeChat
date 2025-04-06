import { request } from "../utils/requester";

const baseURL = 'http://localhost:3030/api/users';


const loginAPI = async (signal, data) => {
    return await  request(baseURL + '/login', signal, data)
  };

const registerAPI = async (signal, data) => {
    return await request(baseURL + '/register',signal, data)
}

export default{
    loginAPI,
    registerAPI
}