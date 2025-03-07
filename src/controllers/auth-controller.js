import { Router } from "express";
import authService from "../services/auth-service.js";
import { getErrorMessage } from "../utils/error-message.js";
import { isAuth } from "../middlewares/auth-middleware.js";
const authRouter = Router()

authRouter.get('/register', (req, res) => {
    res.render('register')
})

authRouter.post('/register', async (req, res) => {
    const userData = req.body;

    try{
        const token = await authService.registerUSer(userData)
        res.cookie('auth', token, {httpOnly:true})
        res.redirect('/')

    } catch(err){
        const error = getErrorMessage(err)
        res.render('register', {error})
    }
})

authRouter.get('/login', (req, res) => {
    res.render('login')
})


authRouter.post('/login', async (req, res) => {
    const userData = req.body;

    try{
        const token = await authService.login(userData)
        res.cookie('auth', token, {httpOnly:true})
        
        res.redirect('/')

    } catch(err){
        const error = getErrorMessage(err)
        res.render('login', {error})
    }
})

authRouter.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth')
    res.redirect('/')
})


export default authRouter;