import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
// import dotenv from "dotenv"
import tripRouter from "./routes/trip.routes.js"
import router from "./routes/trip.routes.js"
import userRouter from "./routes/user.routes.js"
import authRouter from "./routes/auth.routes.js"
const app = express()

const allowedOrigins = process.env.CORS_ORIGIN.split(",")

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
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
//auth routes
app.use("/api/v1/auth", authRouter)
//trip routes
app.use("/api/v1/trips", tripRouter);
app.use("/api/v1/user", userRouter)


export default app