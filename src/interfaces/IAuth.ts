export interface IAuthService {
    loginUser({email,password}:any):any;
    comparePassword(password:string,hashPassword:string):Promise<boolean>;
    hashPassword(password:string):Promise<string>;
    generateAccessToken(user:any):Promise<string>;
    generateRefreshToken(user:any):Promise<string>;
}

