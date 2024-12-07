import mongoose, { Types } from 'mongoose'

const pucharseSchema = new mongoose.Schema({
  id_user: { type: Types.ObjectId, ref: 'users', required: true },
  products: { type: 'array', required: true },
  total: { type: 'number' },
})

export const pucharseModel = mongoose.model('pucharses', pucharseSchema)
