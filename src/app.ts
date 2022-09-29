const express = require('express')
const app = express()
const port = 4000

app.use(express.json())

app.get("/", (req, res) => {
    return res.send("TS wins")
})

app.post("/api/data", (req, res) => {
    console.log(req.body)
    return res.send(200, "you got it")
})

app.listen(port, () =>{
    console.log(`Application listening at http://localhost:${port}`)
})