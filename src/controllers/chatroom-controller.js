import { Router } from "express";
const chatroomRoute = Router()


chatroomRoute.get('/', (req, res) => {
    res.render('chatroom/chatroom')
})

chatroomRoute.get('/create', (req, res) => {
    res.render('chatroom/create')
})


chatroomRoute.post('/create', (req, res) => {
    const chatroomData = req.body;
    res.send(chatroomData)
})


export default chatroomRoute;