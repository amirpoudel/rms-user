import { User } from "../entities/user.entity";
import { IUserRepository } from "../interfaces/user.interface.repository";
import { Owner } from "../models/user.model";
import { IOwner } from "../types/user.types";


export class OwnerRespository{
    async createOwner(owner:IOwner):Promise<IOwner>{
        const newOwner = new Owner(owner);
        await newOwner.save();
        return newOwner;
    }
}


export class UserRepository implements IUserRepository{
    
    create(data: User): Promise<User> {
        throw new Error("Method not implemented.");
    }

}
