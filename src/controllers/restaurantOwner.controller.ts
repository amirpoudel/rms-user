
import { NextFunction,Request,Response } from "express";
import { IRestaurantOwnerInteractor } from "../interfaces/IRestaurantOwner.interface";
import { ErrorHandler } from "../utils/handler/error/ErrorHandler";
import { AsyncHandler } from "../utils/handler/error/AsyncHandler";

export class RestaurantOwnerController{
    private interactor : IRestaurantOwnerInteractor;
    constructor(interactor:IRestaurantOwnerInteractor){
        this.interactor = interactor;
    }
    createOwner = AsyncHandler.trycatch( async (req:Request,res:Response,next:NextFunction)=>{

        const newOwner = await this.interactor.createOwner(req.body);
        res.status(201).json({data:newOwner,message:"Owner created successfully"});
    })


}

