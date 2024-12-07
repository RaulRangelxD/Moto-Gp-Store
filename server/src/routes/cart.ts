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
cartRouter.delete('/:id_cart', DeleteProductCart)
cartRouter.patch('/:id_cart', UpdateProductCart)
