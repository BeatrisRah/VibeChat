import express from 'express'
import 'dotenv/config';
import router from './routes.js';

const app = express()
const port = process.env.PORT || 3000;

app.use(router)



app.listen(port, () => console.log(`App is listening at http://localhost:${port}...` ))