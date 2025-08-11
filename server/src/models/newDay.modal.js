import mongoose from "mongoose";

const daySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        required:true
    },
    activities:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }]
})