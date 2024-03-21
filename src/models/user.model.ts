// owner schema 

import mongoose, { Schema } from "mongoose";
import {IUser} from "../types/user.types";


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



export const UserModel = mongoose.model<IUser>("User", userSchema);

