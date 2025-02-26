import { Router } from "express";
import homeController from "./src/controllers/home-controller.js";
import chatroomRoute from "./src/controllers/chatroom-controller.js";

const router = Router()

router.use('/', homeController)
router.use('/chatrooms', chatroomRoute)

// TODO: Add 404 Page

export default router;