import {
  getPucharse,
  getPucharseById,
  postPucharse,
} from '../controllers/pucharse.js'

import { Router } from 'express'

export const purchaseRouter = Router()

purchaseRouter.get('/', getPucharse)

purchaseRouter.get('/:id_user', getPucharseById)

purchaseRouter.post('/', postPucharse)
