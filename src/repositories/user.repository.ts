import { Owner } from "../models/user.model";
import { IOwner } from "../types/user.types";


export class OwnerRespository{
    async createOwner(owner:IOwner):Promise<IOwner>{
        const newOwner = new Owner(owner);
        await newOwner.save();
        return newOwner;
    }
}

