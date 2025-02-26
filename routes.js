import { Router } from "express";
import homeController from "./src/controllers/home-controller.js";
import chatroomRoute from "./src/controllers/chatroom-controller.js";
import authRouter from "./src/controllers/auth-controller.js";

const router = Router()

router.use('/', homeController)
router.use('/auth', authRouter)
router.use('/chatrooms', chatroomRoute)

// TODO: Add 404 Page

export default router;