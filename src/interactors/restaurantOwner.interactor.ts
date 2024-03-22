import { RestaurantOwner } from "../entities/restaurantOwner.entity";
import { User } from "../entities/user.entity";
import { IRestaurantOwnerInteractor, IRestaurantOwnerRepository } from "../interfaces/IRestaurantOwner.interface";
import { IValidationService } from "../interfaces/IValidation";
import ApiError from "../utils/handler/error/ApiError";

export class RestaurantOwnerInteractor implements IRestaurantOwnerInteractor{

    private repository:IRestaurantOwnerRepository;
    private validate : IValidationService;

    constructor(repository:IRestaurantOwnerRepository,validate:IValidationService){
        this.repository = repository;
        this.validate = validate;
    }

    async createOwner({name,email,password,phoneNumber}:RestaurantOwner) {
      
        try {
            console.log(name,email,password,phoneNumber)
            this.validate.isEmail(email);
            //  this.validate.isPassword(password);
            this.validate.isPhoneNumber(phoneNumber);
            const owner  = new RestaurantOwner(name,email,password,phoneNumber);
            const newOwner = await this.repository.createOwner(owner);
            return newOwner
        } catch (error) {
            throw error
        }
            
        
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

