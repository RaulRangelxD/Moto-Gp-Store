import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import connectDB from './config/db.js'
import { exampleRouter } from './routes/example.js'
import { usersRouter } from './routes/users.js'

dotenv.config()
const PORT = process.env.PORT || 3000

const app = express()

connectDB()

app.use(morgan('dev'))
app.use(express.json())
app.use(
  cors({
    origin: [`http://localhost:${PORT}`, `http://localhost:3000`],
    credentials: true,
  })
)
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/examples', exampleRouter)
app.use('/users', usersRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
