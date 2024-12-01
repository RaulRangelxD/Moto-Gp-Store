import { Router } from 'express'
import {
	getAllUser,
	patchUser,
	postUser,
	deleteUser,
	getUserByEmail,
} from '../controllers/users.js'

export const usersRouter = Router()

usersRouter.get('/', getAllUser)

usersRouter.post('/', postUser)

usersRouter.patch('/:id', patchUser)

usersRouter.delete('/:id', deleteUser)

usersRouter.get('/email/:email', getUserByEmail)
