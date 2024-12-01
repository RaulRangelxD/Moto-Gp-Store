import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	role: {
		type: String,
		enum: ['admin', 'client', 'employee'],
		required: true,
	},
})

export const userModel = mongoose.model('User', userSchema)
