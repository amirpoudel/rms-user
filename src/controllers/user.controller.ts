import { NextFunction, Request,Response } from "express";


import { IUserInteractor } from "../interfaces/user.interface.interactor";

export class UserController {

    private interactor:IUserInteractor;

    constructor(interactor:IUserInteractor){

        this.interactor =interactor;
    }

    createOwner = async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const user = await this.interactor.createUser(req.body);
            res.status(201).json({data:user,message:"Owner created successfully"});

        }catch(err){
            next(err);
        } 
    }
}