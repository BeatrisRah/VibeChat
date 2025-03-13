import multer from "multer";
import fs from 'fs/promises'

import { Router } from "express";
import { isAuth } from "../middlewares/auth-middleware.js";
import chatroomService from "../services/chatroom-service.js";
import { getErrorMessage } from "../utils/error-message.js";

const chatroomRoute = Router()

const upload = multer({dest:'../uploads/'})

chatroomRoute.get('/', async (req, res) => {
    const chatroomList = await chatroomService.getAll()
    res.render('chatroom/chatroom', {chatroomList})
})

chatroomRoute.get('/create', isAuth, (req, res) => {
    res.render('chatroom/create')
})


chatroomRoute.post('/create', isAuth, upload.single('imageURL') , async (req, res) => {
    const chatroomData = req.body;
    const ownerID = req.user.id;

    try{
        
        if(!req.file) throw new Error("Please add image")
        
        const imagePath = req.file.path;

        await chatroomService.create(chatroomData, imagePath, ownerID)
        await fs.unlink(imagePath)
        res.redirect('/chatrooms')
    } catch(err){
        const error = getErrorMessage(err)
        res.render('chatroom/create', {error})
    }

    

})


chatroomRoute.get('/:chatroomID/join', isAuth, async (req, res) => {
    const chatroomID = req.params.chatroomID;
    const userID = req.user.id;

    try{
        await chatroomService.joinChatRoom(chatroomID, userID)
        res.redirect(`/chatrooms/${chatroomID}/chat`)
    } catch(err){
        const error = getErrorMessage(err)
        res.setError(error)
        res.redirect('/chatrooms')
    }
})

chatroomRoute.get('/:chatroomID/chat', (req, res) => {
    const chatroomID = req.params.chatroomID;

    res.render('chatroom/chatroomSpace', {chatroom:true, roomID:chatroomID})
})

export default chatroomRoute;