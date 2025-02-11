import dotenv from "dotenv";
import connectDB from "./db/db.js";
import app from "./app.js";
import nodemailer from "nodemailer"
dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT

connectDB().then(
  app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);
  })
)
.catch((err)=>{
    console.log(err.message);
})

console.log('Email pass : ', process.env.EMAIL_PASS);
console.log('Email User:', process.env.EMAIL_USER);

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Email service configuration error:', error);
  } else {
    console.log('Email service is ready to send messages');
  }
});