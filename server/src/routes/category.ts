import { Router } from 'express'
import { postCreateCategory, getCategory, getProductsCategory, putUpdateCategory, deleteCategory } from '../controllers/category.js'

export const categoryRouter = Router()

categoryRouter.post('/', postCreateCategory)
categoryRouter.get('/', getCategory)
categoryRouter.get('/:categoryId/products', getProductsCategory)
categoryRouter.put('/:categoryId', putUpdateCategory)
categoryRouter.delete('/:categoryId', deleteCategory)
