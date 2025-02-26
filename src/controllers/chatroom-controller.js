import { Router } from "express";
const chatroomRoute = Router()


chatroomRoute.get('/', (req, res) => {
    res.render('chatroom')
})



export default chatroomRoute;