import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, maxlength: 1000 },
    price: { type: Number, required: true, min: 0 },
    reference: { type: String, required: true, trim: true },
    img: { type: String },
    stock: { type: Number, required: true, min: 0 },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export const ProductModel = mongoose.model('Product', ProductSchema)
