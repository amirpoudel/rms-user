
import { RestaurantOwner } from "../entities/restaurantOwner.entity";
import { IRestaurantOwnerRepository } from "../interfaces/IRestaurantOwner.interface";
import { RestaurantOwnerModel } from "../models/restaurantOwner.model";


export class RestaurantOwnerRepository implements IRestaurantOwnerRepository{


    async createOwner(owner:RestaurantOwner):Promise<RestaurantOwner>{
        return  await RestaurantOwnerModel.create(owner);
    }

    async getOwnerById(id:string):Promise<RestaurantOwner|null>{
        return await RestaurantOwnerModel.findById(id);
    }

    async getOwnerByEmail(email:string):Promise<RestaurantOwner|null>{
        return await RestaurantOwnerModel.findOne({email});
    }

    async updateOwner(id:string,input:RestaurantOwner):Promise<RestaurantOwner|null>{
        return await RestaurantOwnerModel.findByIdAndUpdate(id,input);
    }
    
}

