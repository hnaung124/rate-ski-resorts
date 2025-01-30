import Resort from "../models/resort.model.js";
import mongoose from "mongoose";

export const getResorts = async (req,res) =>{
    try{
        const resorts = await Resort.find({});
        res.status(200).json({success: true, data: resorts});
    }
    catch(error){
        console.log("error in fetching resorts:", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

export const createResort = async (req, res) => {
    try {
        const { name, rating, image } = req.body;

        // Validate the input
        if (!name || !rating || !image) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Create a new resort using the model
        const newResort = new Resort({
            name,
            rating,
            image,
        });

        // Save the resort to the database
        await newResort.save();

        // Return the newly created resort
        res.status(201).json({ success: true, data: newResort });
    } catch (error) {
        console.log("error in creating resort:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};


export const updateResort = async (req,res) => {
    const {id} = req.params;

    const resort = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success: false, message: "Invalid Resort ID"});
    }

    try{
        const updatedResort = await Resort.findByIdAndUpdate(id, resort, {new:true});
        res.status(200).json({success: true, data: updatedResort});
    }catch(error){
        res.status(500).json({success: false, message: "Server Error"});
        console.log("error in updating resorts:", error.message);
    }
}

export const deleteResort = async (req,res) => {
    const {id} = req.params;

    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success: false, message: "Invalid Resort ID"});
    }
    
    try{
        await Resort.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Ski Resort deleted"});
    }catch(error){
        res.status(500).json({success: false, message: "Server Error"});
        console.log("error in deleting resorts:", error.message);
    }
}