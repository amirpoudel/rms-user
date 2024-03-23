import { User } from "../../entities/user.entity";
import { IAuthService } from "../../interfaces/IAuth";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export class AuthService implements IAuthService{

    private readonly acessTokenSecret: string = process.env.ACCESS||"THEdefaultAccessTokenSecret";
    private readonly refreshTokenSecret: string = process.env.REFRESH||"THEdefaultRefreshTokenSecret";
    private readonly accessTokenExpiresIn: string = process.env.ACCESS_EXPIRES||"1d";
    private readonly refreshTokenExpiresIn: string = process.env.REFRESH_EXPIRES||"7d"; 
    
    constructor (){

    }

    async authenticateUser(user:User):Promise<void>{
        this.comparePassword(user.password,user.password);
    }

    async loginUser({email,password}:User){
    }

    async comparePassword(password: string, hashPassword: string): Promise<boolean> {
        return await bcrypt.compare(password,hashPassword);
    }

    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password,10);
    }

    async generateAccessToken(user: any): Promise<string> {
        return jwt.sign(
            {
            ...user
            },
            this.acessTokenSecret,
            {
                expiresIn: this.accessTokenExpiresIn
            }

        );
    }

    async generateRefreshToken(user: any): Promise<string> {
        return jwt.sign(
            {
            ...user
            },
            this.refreshTokenSecret,
            {
                expiresIn: this.refreshTokenExpiresIn
            }

        );
    }


}
