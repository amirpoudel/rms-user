import { RestaurantOwner } from "../entities/restaurantOwner.entity";
import { IRestaurantOwner } from "../types/user.types";

export interface IRestaurantOwnerRepository{
    createOwner(owner:IRestaurantOwner):Promise<RestaurantOwner>;
}


export interface IRestaurantOwnerInteractor{
    createOwner(owner:any):any;
    
}