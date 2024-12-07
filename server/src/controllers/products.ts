import { Request, Response } from 'express'
import { productModel } from '../models/products.js'
import { categoryModel } from '../models/category.js'
import { defaultResponse } from '../utils/defaultRes.js'

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productModel.find()
    defaultResponse({ res, status: 200, message: 'Products obtained correctly', data: products })
  } catch (error: any) {
    defaultResponse({ res, status: 500, message: 'Error obtaining the products', data: error.message })
  }
}

export const postCreateProduct = async (req: Request, res: Response) => {
  const { _id, name, description, price, reference, img, stock, categoryId } = req.body

  const category = await categoryModel.findById(categoryId)

  if (!category) {
    return defaultResponse({ res, status: 400, message: 'Category not found', data: null })
  }
  const newProduct = new productModel({
    _id,
    name,
    description,
    price,
    reference,
    img,
    stock,
    category: category?._id,
  })

  try {
    const savedProduct = await newProduct.save()
    defaultResponse({ res, status: 201, message: 'Successfully created product', data: savedProduct })
  } catch (error: any) {
    defaultResponse({ res, status: 400, message: 'Error creating product', data: error.message })
  }
}

export const putUpdateProduct = async (req: Request, res: Response) => {
  const { _id } = req.params
  const update = req.body
  try {
    const updateProduct = await productModel.findOneAndUpdate({ _id }, update, { new: true })
    if (!updateProduct) {
      return defaultResponse({ res, status: 404, message: 'Product not found to update', data: null })
    }
    defaultResponse({ res, status: 200, message: 'Product updated successfully', data: updateProduct })
  } catch (error: any) {
    defaultResponse({ res, status: 500, message: 'Error updating product', data: error.message })
  }
}

export const deleteProducts = async (req: Request, res: Response) => {
  const { _id } = req.params

  try {
    const deletedProduct = await productModel.findOneAndDelete({ _id })
    if (!deletedProduct) {
      return defaultResponse({ res, status: 404, message: 'This product cannot be deleted as it has not been found', data: null })
    }
    defaultResponse({ res, status: 200, message: 'Product successfully removed', data: deletedProduct })
  } catch (error: any) {
    defaultResponse({ res, status: 500, message: 'Error deleting product', data: error.message })
  }
}
