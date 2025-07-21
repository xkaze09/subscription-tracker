import { Router } from 'express';

const workflowRouter = Router();

workflowRouter.get('/', (req, res) => {
    try {

    } catch(error) {
        next(error);
    }
})

export default workflowRouter;