import { User } from "../entities/user.entity";
import { IAuthService } from "../interfaces/IAuth";
import { IUserInteractor, IUserRepository } from "../interfaces/IUser";
import ApiError from "../utils/handler/error/apiError";
import { AppError } from "../utils/handler/error/appError";


export class UserInteractor implements IUserInteractor {

    private repository:IUserRepository;
    private auth:IAuthService;

    constructor(repository:IUserRepository,auth:IAuthService){
        this.repository = repository;
        this.auth = auth;
    }

    async loginUser({email,password}:User):Promise<{user:User,accessToken:string,refreshToken:string}>{
        try {
            console.log(email,password);
            const user = await this.repository.findUserByEmail(email);
            if(!user){
                throw AppError.invalidCredentials("Invalid Email or Password");
            }
            // compare password
            if(!await this.auth.comparePassword(password,user.password)){
                throw AppError.invalidCredentials("Invalid Email or Password");
            }
            // generate token 
            let accessToken = await this.auth.generateAccessToken(user);
            let refreshToken = await this.auth.generateRefreshToken(user);
            console.log(user);
            
            return {user,accessToken,refreshToken};
        } catch (error) {
            throw error;
        }
    }

}