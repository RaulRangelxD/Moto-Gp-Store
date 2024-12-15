import { Router } from 'express'
import {
	getAllUser,
	patchUser,
	postUser,
	deleteUser,
	getUserByEmail,
	loginUser,
	logoutUser,
} from '../controllers/users.js'

export const usersRouter = Router()

usersRouter.get('/', getAllUser)

usersRouter.post('/', postUser)

usersRouter.patch('/:id', patchUser)

usersRouter.delete('/:id', deleteUser)

usersRouter.get('/email/:email', getUserByEmail)

usersRouter.post('/login', loginUser)

usersRouter.post('/logout', logoutUser)
