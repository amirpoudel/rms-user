import { RestaurantOwner } from "../entities/restaurantOwner.entity";
import { IRestaurantOwnerInteractor, IRestaurantOwnerRepository } from "../interfaces/IRestaurantOwner.interface";

export class RestaurantOwnerInteractor implements IRestaurantOwnerInteractor{

    private repository:IRestaurantOwnerRepository;

    constructor(repository:IRestaurantOwnerRepository){
        this.repository = repository;
    }

    async createOwner(input: any) {
        const owner = new RestaurantOwner(owner);
        const newOwner = await this.repository.createOwner(owner);
        return newOwner;
    }

}

