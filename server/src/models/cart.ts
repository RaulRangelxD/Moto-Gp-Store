import mongoose, { Types } from 'mongoose'

const cartSchema = new mongoose.Schema({
  id_user: { type: Types.ObjectId, ref: 'users', required: false },
  products: [{ type: Types.ObjectId, ref: 'cart_products', required: false }],
})

const cartProductsSchema = new mongoose.Schema({
  id_product: { type: Types.ObjectId, ref: 'product', required: true },
  id_cart: { type: Types.ObjectId, ref: 'carts', required: true },
  quanty: { type: 'number', default: 1 },
})

export const CartModel = mongoose.model('carts', cartSchema)
export const CartProductsModel = mongoose.model(
  'cart_products',
  cartProductsSchema
)
