import { Router } from "express";
const authRouter = Router()

authRouter.get('/register', (req, res) => {
    res.render('register')
})

authRouter.get('/login', (req, res) => {
    res.render('login')
})




export default authRouter;