import { Request, response, Response } from 'express'
import { userModel } from '../models/users.js'
import { defaultResponse } from '../utils/defaultRes.js'
import bcrypt from 'bcrypt'
import jwt, { VerifyErrors } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '1h'

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
	const { email } = req.params

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

export const loginUser = async (req: Request, res: Response) => {
	const { email, password } = req.body

	try {
		const user = await userModel.findOne({ email })
		if (!user) {
			return defaultResponse({
				res,
				status: 401,
				message: 'User not exists',
				data: null,
			})
		}

		const isPasswordValid = await bcrypt.compare(password, user.password)
		if (!isPasswordValid) {
			return defaultResponse({
				res,
				status: 401,
				message: 'Incorrect credentials',
				data: null,
			})
		}

		const token = jwt.sign(
			{ id: user._id, email: user.email, role: user.role },
			JWT_SECRET,
			{ expiresIn: JWT_EXPIRATION }
		)

		res.cookie('auth', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 1000, // 1 hour
			sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
		})

		return defaultResponse({
			res,
			status: 200,
			message: 'Authentication successful',
			data: { id: user._id, email: user.email, role: user.role },
		})
	} catch (e) {
		console.error('Error logging in user:', e)
		return defaultResponse({
			res,
			status: 500,
			message: 'Internal server error',
			data: null,
		})
	}
}

export const logoutUser = async (req: Request, res: Response) => {
	try {
		res.cookie('auth', '', {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
			expires: new Date(0),
		})
		res.clearCookie('auth')

		return defaultResponse({
			res,
			status: 200,
			message: 'Logout successful',
			data: null,
		})
	} catch (e) {
		console.error('Error logging out user:', e)
		return defaultResponse({
			res,
			status: 500,
			message: 'Internal server error',
			data: null,
		})
	}
}

export const postUser = async (req: Request, res: Response) => {
	const { username, password, email, role } = req.body
	const hashedPassword = bcrypt.hashSync(password, 10)
	const newUser = new userModel({
		username,
		password: hashedPassword,
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

export const changePassword = async (req: Request, res: Response) => {
	const { email, newPassword } = req.body

	try {
		const user = await userModel.findOne({ email })
		if (!user) {
			return defaultResponse({
				res,
				status: 404,
				message: 'User not found',
				data: null,
			})
		}

		user.password = bcrypt.hashSync(newPassword, 10)
		const updatedUser = await user.save()

		defaultResponse({
			res,
			status: 200,
			message: 'Password updated successfully',
			data: updatedUser,
		})
	} catch (error: any) {
		defaultResponse({
			res,
			status: 400,
			message: 'Error updating password',
			data: error.message,
		})
	}
}

export const patchUser = async (req: Request, res: Response) => {
	const { id } = req.params
	const { username, role } = req.body

	try {
		const updatedUser = await userModel.findByIdAndUpdate(
			id,
			{ username, role },
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

export const authToken = async (req: Request, res: Response) => {
	const token = req.cookies.auth
	try {
		if (!token) {
			return defaultResponse({
				res,
				status: 401,
				message: 'Token not provided',
				data: null,
			})
		}

		jwt.verify(token, JWT_SECRET, (err: VerifyErrors | null, decoded: any) => {
			if (err) {
				return defaultResponse({
					res,
					status: 401,
					message: 'Invalid or expired token',
					data: null,
				})
			}
			return defaultResponse({
				res,
				status: 200,
				message: 'Token is valid',
				data: decoded,
			})
		})
	} catch (e) {
		console.log('Error auth token: ', e)
		return defaultResponse({
			res,
			status: 500,
			message: 'Internal server error',
			data: null,
		})
	}
}
