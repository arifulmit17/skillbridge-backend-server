


import { Request, Response } from 'express';
import { bookingService } from './booking.service';

const createbooking = async (req:Request, res:Response) => {
    console.log(req.body);
    try{
      const result = await bookingService.createbooking(req.body);
      res.status(201).json(result);
    }catch(e){
        res.status(400).json({error: "Teaching booking creation failed",details:e});
        
    }
    
}

const getAllbookings = async (req:Request, res:Response) => {
    try{
        const {tutorid}=req.query;
        
      const result = await bookingService.getAllbookings();
      res.status(200).json(result);
    }catch(e){
        res.status(400).json({error: "Teaching booking fetching failed",details:e});
        
    }
    
}

const updatebookingById = async (req:Request, res:Response) => {
    try{
        const {bookingId}=req.params;
        console.log(bookingId);
        
        const result = await bookingService.updatebookingById(bookingId as string,req.body);
        res.status(200).json(result);
    }catch(e){
        res.status(400).json({error: "Teaching booking update failed",details:e});
    }
}

const deletebookingById = async (req:Request, res:Response) => {
    try{
        const {bookingId}=req.params;
        const result = await bookingService.deletebookingById(bookingId as string);
        res.status(200).json(result);
    }catch(e){
        res.status(400).json({error: "Teaching booking deletion failed",details:e});
    }
}

export const bookingController = { createbooking, getAllbookings, deletebookingById,updatebookingById };