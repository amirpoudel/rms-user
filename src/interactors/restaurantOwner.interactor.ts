import { IRestaurantOwnerInteractor, IRestaurantOwnerRepository } from "../interfaces/IRestaurantOwner.interface";

export class RestaurantOwnerInteractor implements IRestaurantOwnerInteractor{

    private repository:IRestaurantOwnerRepository;

    constructor(repository:IRestaurantOwnerRepository){
        this.repository = repository;
    }
    async createOwner(owner: any) {
        const newOwner = await this.repository.createOwner(owner);
        return newOwner;
    }

}

