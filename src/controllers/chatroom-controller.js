import multer from "multer";
import fs from 'fs/promises'

import { Router } from "express";
import { isAuth } from "../middlewares/auth-middleware.js";
import chatroomService from "../services/chatroom-service.js";
import { getErrorMessage } from "../utils/error-message.js";

const chatroomRoute = Router()

const upload = multer({dest:'../uploads/'})

chatroomRoute.get('/', (req, res) => {
    res.render('chatroom/chatroom')
})

chatroomRoute.get('/create', isAuth, (req, res) => {
    res.render('chatroom/create')
})


chatroomRoute.post('/create', isAuth, upload.single('imageURL') , async (req, res) => {
    const chatroomData = req.body;
    const ownerID = req.user.id;

    try{
        // console.log(req.file);
        
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


export default chatroomRoute;