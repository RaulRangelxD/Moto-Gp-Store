import mongoose, { Schema, Types } from 'mongoose'

interface IProduct {
  _id: Types.ObjectId
  title: string
  description: string
  price: number
  category: string
  img?: string
  stock: number
}

const ProductSchema: Schema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, unique: true },
    description: { type: String, required: true, maxlength: 1000 },
    price: { type: Number, required: true, min: 0 },
    reference: { type: String, required: true, unique: true },
    img: { type: String },
    stock: { type: Number, required: true, min: 0 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)
export const ProductModel = mongoose.model<IProduct>('Product', ProductSchema)
