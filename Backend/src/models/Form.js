import mongoose from "mongoose"

const FormSchema = new mongoose.Schema({
    fullName:{
        type:String,
    },
    contactNo:{
        type:Number,
    },
    emailId:{
        type:String,
    },
    previousCounseling:{
        type:String,
    },
    previousCounselingDetails:{
        type:String,
    },
    isAbove18:{
        type:String,
    },
    parentConsent:{
        type:String,
    },
    selfDescription:{
        type:String,
    },
    consent:{
        type:String,
    },
    reference:{
        type:String,
    }
})
export const Form = mongoose.model("Form", FormSchema);