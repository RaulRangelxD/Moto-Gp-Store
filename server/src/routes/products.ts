import { Router } from 'express'
import { postCreateProduct, getProducts, putUpdateProduct, deleteProducts } from '../controllers/products.js'

export const productsRouter = Router()

productsRouter.post('/', postCreateProduct)
productsRouter.get('/', getProducts)
productsRouter.put('/:_id', putUpdateProduct)
productsRouter.delete('/:_id', deleteProducts)
