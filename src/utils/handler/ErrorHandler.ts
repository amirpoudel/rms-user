import {Request,Response,Errback} from 'express';
import ApiError from './ApiError';
import ApiResponse from './ApiResponse';
import { MongooseError } from 'mongoose';

import { ValidationError } from './Error';


export class ErrorHandler{

    public static expressErrorHandler(err:Errback,req:Request,res:Response){
        if(err instanceof MongooseError){
            const apiError = new MongoDBErrorHandler(err).execute();
            return res.status(apiError.statusCode).json(new ApiError(apiError.statusCode,apiError.message,false));
        }
        if(err instanceof ValidationError){
            return res.status(400).json(new ApiResponse(400,null,err.message,false));
        }
        return res.status(500).json(new ApiResponse(500, null, 'Internal server error', false));
    }
}

class MongoDBErrorHandler{
    private error:MongooseError;
    constructor(err:MongooseError){
        this.error = err;
    }

    public execute(){
        if(this.error.name === 'ValidationError'){
            return new ApiError(400,this.error.message);
        }
        return new ApiError(500);
    }
}
