import mongoose from 'mongoose';
import jwt from "jsonwebtoken";

export const signUp = async(req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        // Check if a user already exists
        const existingUser = await User.FindOne({email});

        // Create a new user
        if (existingUser) {
            const error = new Error('User already exists');
            error.statusCode = 409;
            throw error;
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUsers = await User.Create([{name, email, password: hashedPassword}], {session});

        token = jwt.sign({userId: newUsers[0]._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: {
                token,
                user: newUser[0],
            }
        })
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
}

export const signIn = async(req, res, next) => {
    // Implement sign in logic 
}

export const signOut = async(req, res, next) => {
    // Implement sign out logic 
}