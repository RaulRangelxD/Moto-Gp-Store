import mongoose from 'mongoose'

const exampleSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
})

export const ExampleModel = mongoose.model('Example', exampleSchema)
