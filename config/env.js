import { config } from 'dotenv';

const env = process.env.NODE_ENV || 'development';
config({ path: `.env.${env}.local` });

export const { 
    PORT, 
    JWT_SECRET, 
    JWT_EXPIRES_IN, 
    NODE_ENV, 
    DB_URI,
    ARCJET_KEY,
    ARCJET_ENV,
} = process.env;