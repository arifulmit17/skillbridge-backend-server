import { NextFunction, Request, RequestHandler, Response } from "express";

export const CatchAsync=(fn:RequestHandler)=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
            await fn(req,res,next)
        } catch (error:any) {
            console.log(error);
            res.status(500).json({
                success:false,
                message:"something went wrong",
                error:error.message

            })
            
        }
    }
}
