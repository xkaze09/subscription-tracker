import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => { res.send('GET all subscriptions')})

export default subscriptionRouter;