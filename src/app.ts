const express = require('express')
const app = express()
const port = 4000

app.get("/", (req, res) => {
    return res.send("TS wins")
})

app.listen(port, () =>{
    console.log(`Application listening at http://localhost:${port}`)
})