import { hash } from "bcrypt";
import {Schema, model} from "mongoose";

const userSchema = new Schema({
    username: {
        type:String,
        required: true,
        unique: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.pre('save', async function () {
    this.password = await hash(this.password, Number(process.env.SALT))
})

const User = model('User', userSchema, 'users')
export default User;