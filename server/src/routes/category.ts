import { Router } from 'express'
import { createCategory, getCategory, getProductsCategory, deleteCategory } from '../controllers/category.js'

export const categoryRouter = Router()

categoryRouter.post('/', createCategory)
categoryRouter.get('/', getCategory)
categoryRouter.get('/:categoryId/products', getProductsCategory)
categoryRouter.delete('/:categoryId', deleteCategory)
