import { Request,Response,NextFunction } from "express";
import { IUserInteractor } from "../interfaces/IUser";
import { AsyncHandler } from "../utils/handler/error/asyncHandler";



export class UserController{

    private interactor : IUserInteractor;
    constructor(interactor:IUserInteractor){
        this.interactor = interactor;
    }

    loginUser = AsyncHandler.trycatch(async (req:Request,res:Response,next:NextFunction)=>{
        const user = await this.interactor.loginUser(req.body);
        res.status(200).json({data:user,message:"User logged in successfully"});
        
    })


}