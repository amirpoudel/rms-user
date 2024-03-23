import { RestaurantOwner } from "../entities/restaurantOwner.entity";
import { User } from "../entities/user.entity";
import { IAuthService } from "../interfaces/IAuth";
import { IRestaurantOwnerInteractor, IRestaurantOwnerRepository } from "../interfaces/IRestaurantOwner.interface";
import { IValidationService } from "../interfaces/IValidation";
import ApiError from "../utils/handler/error/apiError";

export class RestaurantOwnerInteractor implements IRestaurantOwnerInteractor{

    private repository:IRestaurantOwnerRepository;
    private validate : IValidationService;
    private auth : IAuthService;

    constructor(repository:IRestaurantOwnerRepository,validate:IValidationService,auth:IAuthService){
        this.repository = repository;
        this.validate = validate;
        this.auth = auth
    }

    async createOwner({name,email,password,phoneNumber}:RestaurantOwner) {
      
        try {
            console.log(name,email,password,phoneNumber)
            this.validate.isEmail(email);
            //  this.validate.isPassword(password);
            this.validate.isPhoneNumber(phoneNumber);
            const hashPassword = await this.auth.hashPassword(password);
            const owner  = new RestaurantOwner(name,email,hashPassword,phoneNumber);
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

