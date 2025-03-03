import User from "../models/User.js"

function cheackData({username, email, password, rePass = null}){
    //check if data is an empty string
    if(username == '' || 
        email == '' ||
        password == ''
    ) throw new Error('Please fill all inputs!')

    if(rePass){
        if(rePass == '' || rePass == password) throw new Error("Passwords don't match!")
    }
}

export default {
    async registerUSer(userData){
        cheackData(userData)
    }
}