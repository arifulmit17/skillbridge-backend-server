import { Booking } from "../../generated/prisma/client";
import { prisma } from "../../lib/prisma";



const createbooking = async (data: Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>) => {
    console.log(data);
    const result = await prisma.booking.create({
        data
    })
    return result;
}

 const getAllbookings = async ()=>{
    const result= await prisma.booking.findMany({
        
  include: {
    tutor: true,
  },
});
    return result;
 }

 const updatebookingById=async (bookingId:string,data:Partial<Booking>)=>{
     console.log(data);
    const result= await prisma.booking.update({
        where:{
            id:bookingId
        },
        data
    })
    return result;
 }

 const deletebookingById=async (bookingId:string)=>{
    
    const result= await prisma.booking.delete({
        where:{
            id:bookingId
        }
    })
    console.log(result);
    return result;
 }

export const bookingService = { createbooking,getAllbookings,deletebookingById,updatebookingById };