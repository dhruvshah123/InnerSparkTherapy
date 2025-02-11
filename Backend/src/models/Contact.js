import mongoose from "mongoose"

const ContactUsSchema = new mongoose.Schema({
    fname:{
        type:String,
    },
    lname:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:Number,
    },
    message:{
        type:String,
    }
})
export const Contact = mongoose.model("Contact", ContactUsSchema);