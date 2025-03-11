import express from 'express'
import 'dotenv/config';
import router from './routes.js';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import expressSession from 'express-session'
import { errorSetter } from './src/middlewares/error-middleware.js';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './src/middlewares/auth-middleware.js';
import { v2 as cloudinary } from 'cloudinary';

try{
    await mongoose.connect(process.env.URI)
    console.log('Connected! :)');
    
} catch(err){
    console.log('Did not connect..D:');
    
    console.log(err);
}

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})


const app = express()
const port = process.env.PORT || 3000;

//express engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions:{
        allowProtoPropertiesByDefault:true
    }
}))
app.set('view engine', 'hbs')
app.set('views', './src/views')

app.use(express.static('src/public'))
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use(expressSession({
    secret: 'Some cute secret idk',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly:true }
}))
app.use(errorSetter)
app.use(authMiddleware)

//Routing
app.use(router)



app.listen(port, () => console.log(`App is listening at http://localhost:${port}...` ))