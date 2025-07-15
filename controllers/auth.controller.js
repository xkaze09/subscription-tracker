import mongoose from 'mongoose';

export const signUp = async(req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        // Create a new user



        await session.commitTransaction();
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