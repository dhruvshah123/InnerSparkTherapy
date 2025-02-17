import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import path from 'path';


const app = express()


app.use(bodyParser.json()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
   origin: ['https://innersparktherapy.com',
    'http://innersparktherapy.com'],
   methods: ['GET', 'POST', 'PUT', 'DELETE'],  
   credentials: true,  
 }));


//import routes
import userRoute from "./routes/user.routes.js" 
// routes declaration
app.use("/api/v1/users",userRoute)
export default app;
