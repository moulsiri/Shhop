import ProductCard from "../models/products.js";
import mongoose from "mongoose";
import {nanoid} from 'nanoid';
import ApiFeatures from "../utils/apiFeatures.js";
// import { json } from "body-parser";

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

//get single product card
export const getProductDetails=async(req,res)=>{
    try{
    const product=await ProductCard.findById(req.params.id);
    // if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no post with that id');
    if(!product){
        return res.status(404).json({message:"Product not found"});
    }
    res.status(200).json({
        success:true,
        product,
    });

    }catch(err){
        res.status(404).json({message:err.message})

    }

}


// Admin Routes 
//create new Products
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

//get Products ---admin
export const getProductsAdmin=async(req,res)=>{
    try{
        const allData=await ProductCard.find();
        res.status(200).json({
            success:true,
            allProducts:allData,
            ProductCount:allData.length,
        })

    }catch(err){
        res.status(400).json({message:"There is problem in loading data."})

    }
}

//delete Products --admin
export const deleteCard=async(req,res)=>{
    try{
        let id=req.params.id;
        let data=await ProductCard.findByIdAndDelete(id);
        res.status(200).json({success:true,data})

    }catch(err){
        res.status(400).json({message:err.message})
    }
}
//edit Product --admin
export const updateProductDetails=async(req,res)=>{
    try{
        let {id}=req.params;
        let data=req.body;
        let product=await ProductCard.findByIdAndUpdate(id,data,{new:true});
        if(!product){
            return res.status(400).json({message:"product not found"});
        }
        return res.status(200).json({success:true,product})


    }catch(err){
       return res.status(404).json({success:false,
    message:err.message});
    }
}

