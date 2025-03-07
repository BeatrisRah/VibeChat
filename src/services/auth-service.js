import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { compare } from "bcrypt";


function cheackData({username, email, password, rePass}){
    //check if data is an empty string
    if( email === '' || password === ''
    ) throw new Error('Please fill all inputs!')

    if(username !== undefined && username === '') throw new Error('Please fill all inputs!')
    //! Check if works for log in!
    if(rePass !== undefined){
        if(rePass === '' || rePass !== password ) throw new Error("Passwords don't match!")
    }
}

async function generateToken(userData){
    const payload = {
        id: userData._id,
        email: userData.email,
        username: userData.username
    }


    const jwtSignPromise = (payload, secret, options) => {
        return new Promise((resolve, reject) => {
            jwt.sign(payload, secret, options, (err, token) => {
                if (err) reject(err);
                else resolve(token);
            });
        });
    };
    
    const token = await jwtSignPromise(payload, process.env.SECRET, { expiresIn: '2h' });
    return token;
    
    
}

export default {
    async registerUSer(userData){
        cheackData(userData)
        
        const user = await User.create({
            username:userData.username,
            email: userData.email,
            password: userData.password
        })

        return await generateToken(user)
    },

    async login(userData){
        cheackData(userData)

        const user = await User.findOne({email: userData.email})
        if(!user) throw new Error('Invalid user or password!')

        const isValid = await compare(userData.password, user.password)

        if(!isValid) throw new Error('Invalid user or password!')

        return await generateToken(user)
        
    }
}