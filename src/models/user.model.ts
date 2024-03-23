// owner schema 

import mongoose, { Schema } from "mongoose";

import { User } from "../entities/user.entity";


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true
    }
})



export const UserModel = mongoose.model<User>("User", userSchema);

