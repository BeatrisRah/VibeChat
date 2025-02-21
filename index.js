import express from 'express'
import 'dotenv/config';
import router from './routes.js';
import handlebars from 'express-handlebars';

const app = express()
const port = process.env.PORT || 3000;

//express engine
app.engine('handlebars', handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine', 'handlebars')
app.set('views', '/src/views')


//Routing
app.use(router)



app.listen(port, () => console.log(`App is listening at http://localhost:${port}...` ))