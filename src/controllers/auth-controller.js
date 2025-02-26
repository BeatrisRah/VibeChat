import { Router } from "express";
const authRouter = Router()

authRouter.get('/register', (req, res) => {
    res.render('register')
})



export default authRouter;