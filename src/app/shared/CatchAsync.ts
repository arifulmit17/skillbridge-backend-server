import { NextFunction, Request, RequestHandler, Response } from "express";
import sendResponse from "../../utils/sendResponse";

export const CatchAsync=(fn:RequestHandler)=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
            await fn(req,res,next)
        } catch (error:any) {
            console.log(error);
            sendResponse(res,{
                statusCode:500,
                success:false,
                message:error,
            })
            
        }
    }
}
