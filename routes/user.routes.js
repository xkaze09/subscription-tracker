import { Router } from 'express';

import authorize from '../middlewares/auth.middleware.js';

import { getUsers, getUser } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get('/', getUsers)
userRouter.get('/:id', authorize, getUser)
userRouter.post('/', (req, res) => {res.send('CREATE new user')})
userRouter.put('/:id', (req, res) => {res.send('UPDATE user by id')})
userRouter.delete('/:id', (req, res) => {res.send('DELETE all users')})  

export default userRouter;