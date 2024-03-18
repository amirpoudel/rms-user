
import { RestaurantOwner } from "../entities/restaurantOwner.entity";
import { IRestaurantOwnerRepository } from "../interfaces/IRestaurantOwner.interface";
import { RestaurantOwnerModel } from "../models/restaurantOwner.model";


export class RestaurantOwnerRepository implements IRestaurantOwnerRepository{


    async createOwner(owner:RestaurantOwner):Promise<RestaurantOwner>{

        const newOwner  = await RestaurantOwnerModel.create(owner);
        return newOwner;

    }

}