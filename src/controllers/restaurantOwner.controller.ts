
import { NextFunction,Request,Response } from "express";
import { IRestaurantOwnerInteractor } from "../interfaces/IRestaurantOwner.interface";

export class RestaurantOwnerController{
    private interactor : IRestaurantOwnerInteractor;
    constructor(interactor:IRestaurantOwnerInteractor){
        this.interactor = interactor;
    }
    createOwner = async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const owner = await this.interactor.createOwner(req.body);
            res.status(201).json({data:owner,message:"Owner created successfully"});
        }catch(err){
            next(err);
        }
    }
}

