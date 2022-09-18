import ProductCard from "../models/products.js";
import mongoose from "mongoose";
import {nanoid} from 'nanoid';
import ApiFeatures from "../utils/apiFeatures.js";
export const createCard=async(req,res)=>{
    try{
        // console.log(req.body);
        let {oldPrice,discount,tags}=req.body;
        let p=oldPrice-(oldPrice*(discount/100));
        let t=tags.split(" ");
        let data={...req.body,price:p,tags:t}
        let cData=await ProductCard.create(data)
        res.status(200).json(cData);

    }catch(err){
        res.status(409).json({message:err.message});
    }
}

export const getCards=async (req,res)=>{
    try{

        const resultPerPage=8;
        const productsCount=await ProductCard.countDocuments();

        const apiFeature=new ApiFeatures(ProductCard,req.query)
        .search()
        .filter();

        let products=await apiFeature.query;
        let filteredProductsCount=products.length;
        apiFeature.pagination(resultPerPage);
        products=await apiFeature.query.clone();

        
        res.status(200).json({
            success:true,
            products,
            productsCount,
            resultPerPage,
            filteredProductsCount,
        });

    }catch(err){
        res.status(400).json({message:err.message})
    }
}