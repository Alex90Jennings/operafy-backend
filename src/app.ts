import express, { Request, Response } from "express";
require('dotenv').config()
import config from 'config'
import connectToDb from "../utils/connectToDb";
import router from './routes'
import userRouter from './routes/user'
import authRouter from './routes/auth'
const app = express()
const port = config.get('port')

app.use(express.json())
app.use(router)

app.use('/operafy/user', userRouter)
app.use('/operafy/auth', authRouter)

router.get('/healthcheck', (_, res: Response) => {
    res.sendStatus(200)
})

app.listen(port, () =>{
    console.log(`Application listening at http://localhost:${port}`)

    connectToDb()
})