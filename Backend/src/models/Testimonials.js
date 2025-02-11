import mongoose from "mongoose"

const TestimonialSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    rating:{
        type:Number,
        required: true,
    },
    review:{
        type:String,
        required: true,
    }
})
export const Testimonials = mongoose.model("Testimonials", TestimonialSchema);