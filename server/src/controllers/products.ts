import { Request, Response } from 'express'
import { ProductModel } from '../models/products.js'
import { defaultResponse } from '../utils/defaultRes.js'

export const createProduct = async (req: Request, res: Response) => {
  const { _id, title, description, price, category, reference, img, stock } = req.body

  const newProduct = new ProductModel({
    _id,
    title,
    description,
    price,
    category,
    reference,
    img,
    stock,
  })
  try {
    const savedProduct = await newProduct.save()
    defaultResponse({ res, status: 201, message: 'Successfully created product', data: savedProduct })
  } catch (error: any) {
    defaultResponse({ res, status: 400, message: 'Error creating Product', data: error.message })
  }
}

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find()
    defaultResponse({ res, status: 200, message: 'Products obtained correctly', data: products })
  } catch (error: any) {
    defaultResponse({ res, status: 500, message: 'Error obtaining the products', data: error.message })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  const { _id } = req.params
  const update = req.body
  try {
    const updateProduct = await ProductModel.findOneAndUpdate({ _id }, update, { new: true })
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
    const deletedProduct = await ProductModel.findOneAndDelete({ _id })
    if (!deletedProduct) {
      return defaultResponse({ res, status: 404, message: 'This product cannot be deleted as it has not been found', data: null })
    }
    defaultResponse({ res, status: 200, message: 'Product successfully removed', data: deletedProduct })
  } catch (error: any) {
    defaultResponse({ res, status: 500, message: 'Error deleting product', data: error.message })
  }
}
