import { Request, Response } from 'express'
import { productModel } from '../models/products.js'
import { categoryModel } from '../models/category.js'
import { defaultResponse } from '../utils/defaultRes.js'

export const getCategory = async (req: Request, res: Response) => {
  try {
    const categories = await categoryModel.find()
    defaultResponse({ res, status: 201, message: 'All categories', data: categories })
  } catch (error: any) {
    defaultResponse({ res, status: 201, message: 'No category found', data: error.message })
  }
}

export const getProductsCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params
  try {
    const products = await productModel.find({ category: categoryId }).populate('category')
    defaultResponse({ res, status: 201, message: 'Category by products', data: products })
  } catch (error: any) {
    defaultResponse({ res, status: 201, message: 'That category was not found', data: error.message })
    res.status(500).json({ success: false, message: 'That category was not found' })
  }
}

export const postCreateCategory = async (req: Request, res: Response) => {
  const { name } = req.body
  try {
    const newCategory = await categoryModel.create({ name })
    defaultResponse({ res, status: 201, message: 'Successfully created category', data: newCategory })
  } catch (error: any) {
    defaultResponse({ res, status: 500, message: 'Error creating category', data: error.message })
  }
}

export const putUpdateCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params
  const update = req.body
  try {
    const updateCatergory = await categoryModel.findOneAndUpdate({ _id: categoryId }, update, { new: true })
    if (!updateCatergory) {
      return defaultResponse({ res, status: 404, message: 'Product not found to update', data: null })
    }
    defaultResponse({ res, status: 200, message: 'Category updated successfully', data: updateCatergory })
  } catch (error: any) {
    defaultResponse({ res, status: 500, message: 'Error updating category', data: error.message })
  }
}

export const deleteCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params

  try {
    const deletedCategory = await categoryModel.findByIdAndDelete(categoryId)
    if (!deletedCategory) {
      return defaultResponse({ res, status: 404, message: 'Category not found', data: null })
    }

    defaultResponse({ res, status: 200, message: 'Category successfully deleted', data: deletedCategory })
  } catch (error: any) {
    defaultResponse({ res, status: 500, message: 'Error deleting category', data: error.message })
  }
}
