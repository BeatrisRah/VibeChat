import { Router } from "express";

const homeController  = Router()

homeController.get('/', (req, res) => {
    res.send('HOME')
})


export default homeController;