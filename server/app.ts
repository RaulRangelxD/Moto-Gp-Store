import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

dotenv.config()
const PORT = process.env.PORT || 3001

const app = express()

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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
