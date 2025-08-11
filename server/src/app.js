import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
// import dotenv from "dotenv"
import tripRouter from "./routes/trip.routes.js"
import router from "./routes/trip.routes.js"
import userRouter from "./routes/user.routes.js"
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))
app.use(express.json({
    limit: '16kb'
}))
app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}))
app.use(express.static("public"))
app.use(cookieParser())
app.use(router)
// app.use('/api/v1',router)

app.use(express.json())
app.use(cookieParser())
//trip routes
app.use("/api/v1/trips", tripRouter);
app.use("/api/v1/user", userRouter)

export default app