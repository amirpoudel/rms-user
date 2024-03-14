// owner schema 

import mongoose, { Schema } from "mongoose";
import {IUser, IOwner , IStaff } from "../types/user.types";


const userSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: true,
    },
    lastName: {
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
    contact: {
        phoneNumber: {
            type: [String],
            required: true,
        },
        address: {
            province: {
                type: String,
                required: true,
            },
            district: {
                type: String,
                required: true,
            },
            municipality: {
                type: String,
                required: true,
            },
            wardNumber: {
                type: Number,
                required: true,
            },
            areaName: {
                type: String,
                required: true,
            },
        },
    },
})

const ownerSchema = new Schema<IOwner>({
    ...userSchema.obj,
    restaurantIds: {
        type: [String],
        required: true,
    },
});

const staffSchema = new Schema<IStaff>({
   ...userSchema.obj,
    role: {
        type: String,
        required: true,
    },
    restaurantId: {
        type: String,
        required: true,
    },
});



export const Owner = mongoose.model<IOwner>("Owner", ownerSchema);
export const Staff = mongoose.model<IStaff>("Staff", staffSchema);