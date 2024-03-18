import mongoose, { Schema } from "mongoose";
import {IRestaurantOwner} from "../types/user.types";
import { UserModel } from "./user.model";

const restaurantOwnerSchema = new Schema({
    restaurantIds: {
        type: [String],
        required: true,
    }
})

export const RestaurantOwnerModel = UserModel.discriminator<IRestaurantOwner>("RestaurantOwner", restaurantOwnerSchema);