import {
  getCart,
  postCart,
  DeleteProductCart,
  UpdateProductCart,
} from '../controllers/cart.js'
import { Router } from 'express'

export const cartRouter = Router()

cartRouter.get('/:id_user', getCart)
cartRouter.post('/:id_cart', postCart)
cartRouter.patch('/:id_cart', UpdateProductCart)
cartRouter.delete('/:id_cart', DeleteProductCart)
