import { Router } from 'express'
import { getExample, postExample } from '../controllers/example.js'

export const exampleRouter = Router()

exampleRouter.get('/', getExample)

exampleRouter.post('/', postExample)
