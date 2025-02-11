import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET// Click 'View Credentials' below to copy your API secret
    });
    
   export const uploadOn=async (filePath) =>{
      try {
        if(!filePath) return null;
       //upload 
       console.log("1");
       console.log(filePath);
       
       const response = await cloudinary.uploader.upload(filePath,{
        resource_type:"auto"
       })  
       //file has been updated succesfully
       console.log("file is uploaded on cloudinary",response.url)
       
       
       return response;
    } catch (error) {
        fs.unlinkSync(filePath);//remove the locally save temporary file as upload operation failed
      }
   }