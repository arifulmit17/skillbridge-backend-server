
import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";

const secret="ssdfsfsdfsdfsfsfsdfgswrwer"

const  createUserAuth= async(payload:any)=>{
    
    const {password}=payload
     console.log(payload);
    const hashedPass=await bcrypt.hash(password, 8);
    const result=await prisma.user.create({
        data:{
            ...payload,
            password:hashedPass
        }
    })
    
    return result
}

export const AuthService = {
    // Add service methods here
      createUserAuth
    };