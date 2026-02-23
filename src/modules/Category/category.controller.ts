

import { categoryService } from './category.service';
import { CatchAsync } from '../../app/shared/catchAsync';
import { Request, Response } from 'express';
import sendResponse from '../../utils/sendResponse';



const createCategory = CatchAsync(
    async(req:Request,res:Response)=>{
       const result = await categoryService.createCategory(req.body);
      sendResponse(res,{
       statusCode:201,
        success:true,
        message:"Category created successfully",
        data:result
      });
    }
)
 
const getAllCategories = CatchAsync(
    async (req:Request,res:Response)=>{
const result = await categoryService.getAllCategories();
      res.status(201).json({
        success:true,
        message:"Categories retrieved successfully",
        data:result
      });
    }
)

const getCategoryById = async (req:Request, res:Response) => {
    try{
        const {categoryId}=req.params;
        if (!categoryId) {
            throw new Error("Category Id is required!")
        }
        const result = await categoryService.getCategoryById(categoryId as string);
        res.status(200).json(result);
    }catch(e){
        res.status(400).json({error: "Category fetching failed",details:e});
    }
}

export const updateCategoryById = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params
    

    const result = await categoryService.updateCategoryById(
      categoryId as string,
      req.body
    )

    res.status(200).json(result)
  } catch (e) {
    res.status(400).json({
      error: "Category update failed",
      details: e,
    })
  }
}

export const deleteCategoryById = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params

    const result = await categoryService.deleteCategoryById(categoryId as string)

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to delete category",
      error,
    })
  }
}


export const categoryController = { createCategory, getAllCategories,getCategoryById ,updateCategoryById,deleteCategoryById};