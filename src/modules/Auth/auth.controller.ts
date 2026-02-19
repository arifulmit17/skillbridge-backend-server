import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import sendResponse from "../../utils/sendResponse";


const CreateUserAuth=async (req:Request,res:Response)=>{
     try{
        
     const result=await AuthService.createUserAuth(req.body)

     sendResponse(res,{
        statusCode:201,
        success:true,
        message:"User created successfully",
        data:result

     })

     }catch(error){
        console.error(error)
        sendResponse(res,{
        statusCode:400,
        success:false,
        message:"User creation failed",
        data:error
     })
     }
    
    
}

export const AuthController = {
    // Add controller methods here
    CreateUserAuth
    };