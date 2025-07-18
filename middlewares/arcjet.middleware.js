import aj from '../config/arcjet.js';

const arcjetMiddleware = (req, res, next) => {
    try {

    } catch(error) {
        console.log(`Arcjet Middleware Error: ${error}`);
        next(error);
    }
}