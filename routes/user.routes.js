import { Router } from 'express';

import { getUsers, getUser } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get('/', getUsers)
userRouter.get('/:id', getUser)
userRouter.post('/', (req, res) => {res.send('CREATE new user')})
userRouter.put('/:id', (req, res) => {res.send('UPDATE user by id')})
userRouter.delete('/:id', (req, res) => {res.send('DELETE all users')})  

export default userRouter;