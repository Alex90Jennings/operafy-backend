import express, { Request, Response } from "express";
require('dotenv').config()
import config from 'config'
const app = express()
const port = config.get('port')

app.use(express.json())

app.route("/")
    .get((req: Request, res: Response) => {
        return res.send('you made a GET req')
    })
    .post((req: Request, res: Response) => {
        return res.send('you made a POST req')
    })
    .all((req: Request, res: Response) => {
        return res.send('you made a X req')
    })

app.listen(port, () =>{
    console.log(`Application listening at http://localhost:${port}`)
})