import { RestaurantOwner } from "../entities/restaurantOwner.entity";
import { User } from "../entities/user.entity";
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

    async getOwnerById(id:string){
        const owner = await this.repository.getOwnerById(id);
        return owner;
    }

    async getOwnerByEmail(email:string){
        const owner = await this.repository.getOwnerByEmail(email);
        return owner;
    }

    async updateOwner(id:string,input:User){
        const owner = await this.repository.updateOwner(id,input);
        return owner;
    }


}

