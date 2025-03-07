import { Router } from "express";
const chatroomRoute = Router()


chatroomRoute.get('/', (req, res) => {
    res.render('chatroom/chatroom')
})

chatroomRoute.get('/create', (req, res) => {
    res.render('chatroom/create')
})



export default chatroomRoute;