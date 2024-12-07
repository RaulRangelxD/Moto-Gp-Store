import { Request, Response } from 'express'
import { CartModel, CartProductsModel } from '../models/cart.js'
import { defaultResponse } from '../utils/defaultRes.js'
import { productModel } from '../models/products.js'

export const getCart = async (
  req: Request<{ id_user: string }>,
  res: Response
) => {
  console.log('id_user:', req.params.id_user)
  try {
    const cart = await CartModel.findOne({ id_user: req.params.id_user })

    if (!cart) {
      const newCart = new CartModel({
        id_user: req.params.id_user,
        products: [],
      })
      const saveNewCart = await newCart.save()

      return defaultResponse({
        res,
        status: 200,
        message: 'Find is succesfull',
        data: saveNewCart,
      })
    }

    defaultResponse({
      res,
      status: 200,
      message: 'Find is succesfull',
      data: cart?.products || [],
    })
  } catch (err: any) {
    defaultResponse({
      res,
      status: 500,
      message: 'Error finding Cart',
      data: err.message,
    })
  }
}

export const postCart = async (
  req: Request<{
    id_product: string
    id_user: string
    id_cart: string
    quanty: number
  }>,
  res: Response
) => {
  const cart = await CartModel.findById(req.params.id_cart)
  if (!cart) {
    return defaultResponse({
      res,
      status: 404,
      message: 'Cart not found',
      data: null,
    })
  }

  const product = await productModel.findById(req.body.id_product)

  if (!product)
    return defaultResponse({
      res,
      status: 404,
      message: 'Error Product not found',
      data: null,
    })

  const newProduct = new CartProductsModel({
    id_product: req.body.id_product,
    quanty: req.body.quanty,
    id_cart: req.params.id_cart,
  })

  try {
    const savedCart = await newProduct.save()

    cart.products.push(savedCart._id)
    await cart.save()
    defaultResponse({
      res,
      status: 201,
      message: 'Product added in to cart',
      data: savedCart,
    })
  } catch (err: any) {
    defaultResponse({
      res,
      status: 500,
      message: 'error saving product in cart',
      data: err.message,
    })
  }
}

export const UpdateProductCart = async (
  req: Request<{ id_cart: string; quanty: number }>,
  res: Response
) => {
  try {
    const updateProduct = await CartProductsModel.findByIdAndUpdate(
      req.params.id_cart,
      {
        $set: {
          quanty: req.body.quanty,
        },
      },
      { new: true, upsert: true }
    )

    defaultResponse({
      res,
      status: 200,
      message: 'Update is successful',
      data: updateProduct,
    })
  } catch (err: any) {
    defaultResponse({
      res,
      status: 500,
      message: 'Error Updating cart',
      data: err.message,
    })
  }
}

export const DeleteProductCart = async (
  req: Request<{ id_cart: string }>,
  res: Response
) => {
  try {
    const deleteProduct = await CartProductsModel.findByIdAndDelete(
      req.params.id_cart
    )
    defaultResponse({
      res,
      status: 200,
      message: 'Delete is successful',
      data: deleteProduct,
    })
  } catch (err: any) {
    defaultResponse({
      res,
      status: 500,
      message: 'Error deleting product on cart',
      data: err.message,
    })
  }
}
