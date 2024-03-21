import { User } from "../entities/user.entity";
import { IUserRepository } from "../interfaces/IUser";





export class UserRepository implements IUserRepository{
    
    create(data: User): Promise<User> {
        throw new Error("Method not implemented.");
    }

}

