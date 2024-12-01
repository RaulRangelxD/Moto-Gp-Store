import { Request, response, Response } from 'express'
import { userModel } from '../models/users.js'
import { defaultResponse } from '../utils/defaultRes.js'

export const getAllUser = async (req: Request, res: Response) => {
	try {
		const users = await userModel.find()
		defaultResponse({
			res,
			status: 200,
			message: 'Examples fetched successfully',
			data: users,
		})
	} catch (error: any) {
		defaultResponse({
			res,
			status: 500,
			message: 'Error fetching examples',
			data: error.message,
		})
	}
}

export const getUserByEmail = async (req: Request, res: Response) => {
	const { email } = req.params // Obtenemos el email desde los parámetros de la solicitud

	try {
		const User = await userModel.findOne({ email })

		if (!User) {
			return defaultResponse({
				res,
				status: 404,
				message: 'User not found',
			})
		}

		defaultResponse({
			res,
			status: 200,
			message: 'User found successfully',
			data: User,
		})
	} catch (error: any) {
		defaultResponse({
			res,
			status: 400,
			message: 'Error finding user by email',
			data: error.message,
		})
	}
}
export const postUser = async (req: Request, res: Response) => {
	const { username, password, email, role } = req.body

	const newUser = new userModel({
		username,
		password,
		email,
		role,
	})

	try {
		const savedUser = await newUser.save()
		defaultResponse({
			res,
			status: 201,
			message: 'User created successfully',
			data: savedUser,
		})
	} catch (error: any) {
		defaultResponse({
			res,
			status: 400,
			message: 'Error saving user',
			data: error.message,
		})
	}
}

export const patchUser = async (req: Request, res: Response) => {
	const { id } = req.params
	const { username, password, role } = req.body

	try {
		const updatedUser = await userModel.findByIdAndUpdate(
			id,
			{ username, password, role },
			{ new: true, runValidators: true }
		)

		if (!updatedUser) {
			return defaultResponse({
				res,
				status: 404,
				message: 'User not found',
			})
		}

		defaultResponse({
			res,
			status: 200,
			message: 'User updated successfully',
			data: updatedUser,
		})
	} catch (error: any) {
		defaultResponse({
			res,
			status: 400,
			message: 'Error updating user',
			data: error.message,
		})
	}
}

export const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params
	try {
		const deleteUser = await userModel.findByIdAndDelete(id)

		defaultResponse({
			res,
			status: 200,
			message: 'User deleted successfully',
			data: deleteUser,
		})
	} catch (error: any) {
		defaultResponse({
			res,
			status: 400,
			message: 'Error deleting user',
			data: error.message,
		})
	}
}
