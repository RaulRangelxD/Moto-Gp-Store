import { Router } from 'express'
import { getProducts, createProduct, updateProduct, deleteProducts } from '../controllers/products.js'

export const productsRouter = Router()

productsRouter.post('/', createProduct)
productsRouter.get('/', getProducts)
productsRouter.put('/:_id', updateProduct)
productsRouter.delete('/:_id', deleteProducts)
