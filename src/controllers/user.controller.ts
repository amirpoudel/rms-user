import { NextFunction, Request,Response } from "express";
import { OwnerService } from "../services/user.service";

export class UserController {
    private ownerService:OwnerService; 
    constructor(){
        this.ownerService = new OwnerService();
    }

    createOwner = async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const owner = await this.ownerService.createOwner(req.body);
            res.status(201).json({data:owner,message:"Owner created successfully"});

        }catch(err){
            next(err);
        } 
    }
}