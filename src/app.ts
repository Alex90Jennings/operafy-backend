import express, { Request, Response } from "express";
const app = express()
const port = 4000

app.use(express.json())
app.all("/api/data", (req: Request, res: Response) =>{
    return res.sendStatus(200)
})

app.get("/", (req: Request, res: Response) => {
    return res.json({
        "status": true
    })
})

app.post("/api/data", (req: Request, res: Response) => {
    console.log(req.body)
    return res.sendStatus(200)
})

app.listen(port, () =>{
    console.log(`Application listening at http://localhost:${port}`)
})