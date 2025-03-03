import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { compare } from "bcrypt";


function cheackData({username, email, password, rePass}){
    //check if data is an empty string
    if(username === '' || 
        email === '' ||
        password === ''
    ) throw new Error('Please fill all inputs!')

    //! Check if works for log in!
    if(rePass !== undefined){
        if(rePass === '' || rePass !== password) throw new Error("Passwords don't match!")
    }
}

function generateToken(userData){
    const paylot = {

    }
    
}

export default {
    async registerUSer(userData){
        cheackData(userData)
        
        const user = await User.create({
            username:userData.username,
            email: userData.email,
            password: userData.password
        })

        return user;
    }
}