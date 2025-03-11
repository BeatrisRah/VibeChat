import { Router } from "express";
import { isAuth } from "../middlewares/auth-middleware.js";
import chatroomService from "../services/chatroom-service.js";
import { getErrorMessage } from "../utils/error-message.js";
const chatroomRoute = Router()


chatroomRoute.get('/', (req, res) => {
    res.render('chatroom/chatroom')
})

chatroomRoute.get('/create', isAuth, (req, res) => {
    res.render('chatroom/create')
})


chatroomRoute.post('/create', isAuth, async (req, res) => {
    const chatroomData = req.body;
    const ownerID = req.user.id;

    try{
        await chatroomService.create(chatroomData, ownerID)
        res.redirect('/chatrooms')
    } catch(err){
    }

})


export default chatroomRoute;