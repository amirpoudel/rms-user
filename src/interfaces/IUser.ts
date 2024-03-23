import { User } from "../entities/user.entity";

export interface IUserInteractor{
    loginUser({email,password}:User):Promise<{
        user:User,
        accessToken:string,
        refreshToken:string
    }>;
}




export interface IUserRepository{
    findUserByEmail(email:string):Promise<User|null>;
}




