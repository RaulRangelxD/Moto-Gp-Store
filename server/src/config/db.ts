import mongoose from 'mongoose'

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/FerreConnect'

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri)
    console.log('MongoDB connected')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    process.exit(1)
  }
}

export default connectDB
