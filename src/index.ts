import express from "express"
import morgan from "morgan"
import { env } from "process"

const app = express()

const port = Number(env.PORT || 8080)

app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.send("API DE MERDE!!")
})

app.listen(port, '0.0.0.0', () => console.log(`APP LISTENING ON PORT http://localhost:${port}`))