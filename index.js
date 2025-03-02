import express from 'express'
import 'dotenv/config';
import router from './routes.js';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

try{
    await mongoose.connect(process.env.URI)
    console.log('Connected! :)');
    
} catch(err){
    console.log('Did not connect..D:');
    
    console.log(err);
}

const app = express()
const port = process.env.PORT || 3000;

//express engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', './src/views')

app.use(express.static('src/public'))


//Routing
app.use(router)



app.listen(port, () => console.log(`App is listening at http://localhost:${port}...` ))