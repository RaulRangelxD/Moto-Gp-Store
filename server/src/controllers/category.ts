import { Request, Response } from 'express'
import { ProductModel } from '../models/products.js'
import { CategoryModel } from '../models/category.js'
import { defaultResponse } from '../utils/defaultRes.js'

export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body
  try {
    const newCategory = await CategoryModel.create({ name })
    defaultResponse({ res, status: 201, message: 'Successfully created category', data: newCategory })
  } catch (error: any) {
    defaultResponse({ res, status: 500, message: 'Error creating category', data: error.message })
  }
}

export const getCategory = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find()
    defaultResponse({ res, status: 201, message: 'All categories', data: categories })
  } catch (error: any) {
    defaultResponse({ res, status: 201, message: 'No category found', data: error.message })
  }
}

export const getProductsCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params
  try {
    const products = await ProductModel.find({ category: categoryId }).populate('category')
    defaultResponse({ res, status: 201, message: 'Category by products', data: products })
  } catch (error: any) {
    defaultResponse({ res, status: 201, message: 'That category was not found', data: error.message })
    res.status(500).json({ success: false, message: 'That category was not found' })
  }
}

export const deleteCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params

  try {
    const deletedCategory = await CategoryModel.findByIdAndDelete(categoryId)
    if (!deletedCategory) {
      return defaultResponse({ res, status: 404, message: 'Category not found', data: null })
    }

    defaultResponse({ res, status: 200, message: 'Category successfully deleted', data: deletedCategory })
  } catch (error: any) {
    defaultResponse({ res, status: 500, message: 'Error deleting category', data: error.message })
  }
}
