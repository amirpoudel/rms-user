import { OwnerRespository } from "../repositories/user.repository";
import { IOwner } from "../types/user.types";

export class OwnerService {
    private ownerRepository:OwnerRespository;
    constructor(){
        this.ownerRepository = new OwnerRespository();
    }



    async createOwner(owner:IOwner):Promise<IOwner>{

        
        return await this.ownerRepository.createOwner(owner);
    }
}

