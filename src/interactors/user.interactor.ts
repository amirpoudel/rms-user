import { IUserInteractor } from "../interfaces/user.interface.interactor";
import { IUserRepository } from "../interfaces/user.interface.repository";

export class UserInteractor implements IUserInteractor{
    
   private respository:IUserRepository;

   constructor(repository:IUserRepository){
       this.respository = repository;
   }

    async createUser(input: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

}

