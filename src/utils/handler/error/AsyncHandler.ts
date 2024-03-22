import { Request,Response,NextFunction } from "express";
import { ErrorHandler } from "./ErrorHandler";


export class AsyncHandler {
    public static trycatch(requestHandler: Function){
        return async (req:Request, res:Response, next:NextFunction) => {
            try {
                await Promise.resolve(requestHandler(req, res, next));
            } catch (error) {
                ErrorHandler.expressErrorHandler(error, req, res);
            }
        }
    }
}

