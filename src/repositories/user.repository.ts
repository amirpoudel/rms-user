
import { User } from "../entities/user.entity";
import { IUserRepository } from "../interfaces/IUser";
import { UserModel } from "../models/user.model";


export class UserRepository implements IUserRepository{

    
    
    async findUserByEmail(email: string): Promise<User | null> {
        try {
            const user = await UserModel.findOne({email: email});
            return user;
        } catch (error) {
            throw error;
        }
    }

}




