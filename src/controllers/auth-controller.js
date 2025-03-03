import { Router } from "express";
import authService from "../services/auth-service.js";
import { getErrorMessage } from "../utils/error-message.js";
const authRouter = Router()

authRouter.get('/register', (req, res) => {
    res.render('register')
})

authRouter.post('/register', async (req, res) => {
    const userData = req.body;

    try{
        await authService.registerUSer(userData)
        

    } catch(err){
        const error = getErrorMessage(err)
        res.render('register', {error})
    }
})

authRouter.get('/login', (req, res) => {
    res.render('login')
})




export default authRouter;