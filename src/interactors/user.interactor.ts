import { IUserInteractor,IUserRepository} from "../interfaces/IUser";

export class UserInteractor implements IUserInteractor{
    
   private respository:IUserRepository;
   

   constructor(repository:IUserRepository){
       this.respository = repository;
   }

    async createUser(input: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

}

