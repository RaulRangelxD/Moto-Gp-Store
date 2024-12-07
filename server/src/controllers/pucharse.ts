import { pucharseModel } from '../models/pucharse.js'
import { CartModel } from '../models/cart.js'
import { Request, Response } from 'express'
import { defaultResponse } from '../utils/defaultRes.js'

export const postPucharse = async (
  req: Request<{
    id_user: string
    id_cart: string
    product: string
    total: Number
  }>,
  res: Response
) => {
  const cart = await CartModel.findById(req.body.id_cart)
  if (!cart) {
    const newPucharsewithoutCart = new pucharseModel({
      id_user: req.body.id_user,
      products: req.body.product,
      total: req.body.total,
    })
    try {
      const savePucharsewithoutCart = await newPucharsewithoutCart.save()

      defaultResponse({
        res,
        status: 201,
        message: 'created new pucharse successfully',
        data: savePucharsewithoutCart,
      })
    } catch (err: any) {
      defaultResponse({
        res,
        status: 500,
        message: 'error creating new pucharse',
        data: err.message,
      })
    }
  }
  const newPucharse = new pucharseModel({
    id_user: req.body.id_user,
    id_cart: req.body.id_cart,
    products: cart?.products,
    total: req.body.total,
  })

  try {
    const savedPucharse = await newPucharse.save()
    defaultResponse({
      res,
      status: 201,
      message: 'created new pucharse successfully',
      data: savedPucharse,
    })
  } catch (err: any) {
    defaultResponse({
      res,
      status: 500,
      message: 'error creating new pucharse',
      data: err.message,
    })
  }
}

export const getPucharse = async (req: Request, res: Response) => {
  try {
    const pucharse = await pucharseModel.find()
    if (!pucharse) {
      defaultResponse({
        res,
        status: 404,
        message: 'pucharses not found',
        data: pucharse,
      })
    }
    defaultResponse({
      res,
      status: 200,
      message: 'find pucharses successfully',
      data: pucharse,
    })
  } catch (err: any) {
    defaultResponse({
      res,
      status: 500,
      message: 'error finding pucharses',
      data: err.message,
    })
  }
}

export const getPucharseById = async (
  req: Request<{ id_user: string }>,
  res: Response
) => {
  try {
    const pucharse = await pucharseModel.find({ id_user: req.params.id_user })
    if (!pucharse) {
      defaultResponse({
        res,
        status: 404,
        message: 'pucharses not found',
        data: null,
      })
    }
    defaultResponse({
      res,
      status: 200,
      message: 'find pucharse by id successfully',
      data: pucharse,
    })
  } catch (err: any) {
    defaultResponse({
      res,
      status: 500,
      message: 'error finding pucharses',
      data: err.message,
    })
  }
}
