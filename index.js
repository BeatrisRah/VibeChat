import express from 'express'
import 'dotenv/config';

const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    
    res.send('Works')
})



app.listen(port, () => console.log(`App is listening at http://localhost:${port}...` ))