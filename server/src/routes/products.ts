import { Router } from 'express'
import { createProduct, getProducts, putUpdateProduct, deleteProducts } from '../controllers/products.js'

export const productsRouter = Router()

productsRouter.post('/', createProduct)
productsRouter.get('/', getProducts)
productsRouter.put('/:_id', putUpdateProduct)
productsRouter.delete('/:_id', deleteProducts)
