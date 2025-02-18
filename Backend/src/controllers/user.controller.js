import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResonse.js";
import { ApiError } from "../utils/ApiError.js";
import { Contact } from "../models/Contact.js";
import nodemailer from "nodemailer";
import { Testimonials } from "../models/Testimonials.js";
import { Form } from "../models/Form.js";
import { Blog } from "../models/Blog.js";
import { uploadOn } from "../utils/cloudinary.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = asyncHandler(async (req, res) => {
  // Log entire request body for debugging
  console.log("Full request body:", req.body);
  console.log("Headers:", req.headers);

  const { firstname, lastname, email, phone, message } = req.body;
  console.log("Destructured values:", {
    firstname,
    lastname,
    email,
    phone,
    message,
  });

  if (
    [firstname, email, lastname, phone, message].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const user = await Contact.create({
    firstname,
    lastname,
    email,
    phone,
    message,
  });

  // Email to the user
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Contacting Inner Spark Therapy",
    text: `Thank you for contacting us. You will be contacted shortly.`,
  };

  // Email to admin
  const mailOptions1 = {
    from: process.env.EMAIL_USER,
    to: process.env.DEFAULT_EMAIL_USER,
    subject: `Enquiry for Therapy Session by ${firstname} ${lastname}`,
    text: `${firstname} has contacted us for a Therapy Session.\n
    Details of the customer:\n
    Name: ${firstname} ${lastname}\n
    Email: ${email}\n
    Phone: ${phone}\n
    Message: ${message}`,
  };

  try {
    // Send emails concurrently
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(mailOptions1),
    ]);

    return res
      .status(201)
      .json(new ApiResponse(200, user, "User email sent successfully"));
  } catch (error) {
    console.error("Error sending email:", error);
    throw new ApiError(500, "Error sending emails");
  }
});

export const postTestimonials = asyncHandler(async (req, res) => {
  console.log("Full request body:", req.body);
  console.log("Headers:", req.headers);

  const { name, rating, review } = req.body;

  if (!name || !rating || !review) {
    throw new ApiError("Please fill all the fields");
  }

  try {
    const reviews = await Testimonials.create({
      name,
      rating,
      review,
    });

    if (!reviews) {
      throw new ApiError("Couldnt add reviews in database");
    }

    return res
      .status(201)
      .json(new ApiResponse(200, reviews, "Reviews added successfully"));
  } catch (error) {
    throw new ApiError("Error posting data", error);
  }
});

export const fetchTestimonials = asyncHandler(async (req, res) => {
  try {
    const testimonials = await Testimonials.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch testimonials", error: error.message });
  }
});

export const Consultancy = asyncHandler(async (req, res) => {
  const {
    fullName,contactNo,emailId,previousCounseling,previousCounselingDetails,isAbove18,parentConsent,selfDescription,consent,reference,} = req.body;

  if (
    !fullName || !contactNo || !emailId || !previousCounseling  || isAbove18 === undefined || !selfDescription ) {
    throw new ApiError(400, "All fields are required");
  }

  if (!isAbove18 && !parentConsent) {
    throw new ApiError(400, "Parent consent is required if you are under 18");
  }

  try {
    const form = await Form.create({
      fullName,
      contactNo,
      emailId,
      previousCounseling,
      previousCounselingDetails,
      isAbove18,
      parentConsent,
      selfDescription,
      consent,
      reference,
    });

    if (!form) {
      throw new ApiError(500, "Failed to insert form data");
    }
   
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: emailId,
      subject: "Contacting Inner Spark Therapy",
      text: `Thank you for contacting us. Your gift will be delivered to your loved ones shortly.`,
    };
  
    // Email to admin
    const mailOptions1 = {
      from: process.env.EMAIL_USER,
      to: process.env.DEFAULT_EMAIL_USER,
      subject: `Enquiry for Therapy Session by ${fullName}`,
      text: `${fullName} has contacted us for Therapy Session which was gifted by his/her loved one.\n
      Details of the customer:\n
      Name: ${fullName}\n
      Email: ${emailId}\n
      Phone: ${contactNo}\n
      PreviousCounseling: ${previousCounseling}\n
      PreviousCounselingDetails: ${previousCounselingDetails}\n
      Selfdescription: ${selfDescription}\n
      isAbove18: ${isAbove18}\n
      ParentConsent: ${parentConsent}\n
      Reference: ${reference}\n`
    };
  
    try {
      // Send emails concurrently
      await Promise.all([
        transporter.sendMail(mailOptions),
        transporter.sendMail(mailOptions1),
      ]);
    return res
      .status(201)
      .json(new ApiResponse(200, form, "Form data added successfully"));

    }catch{
      console.log("Error sending from details in mail")
    }
  } catch (error) {
    console.error("Error posting form data:", error);
    throw new ApiError(500, "An error occurred while processing your request");
  }
});

export const createBlog = asyncHandler(async (req, res) => {
  const { title, author, content, fullContent, readTime } = req.body;

  if ([title, author, content, fullContent, readTime].some(
    (field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const imageLocalPath = req.files?.image?.[0]?.path;

  if (!imageLocalPath) {
    throw new ApiError(400, "Blog image is required");
  }
  console.log(imageLocalPath);
  
  
    const image = await uploadOn(imageLocalPath);

    if (!image) {
      throw new ApiError(400, "Error while uploading image");
    }else{
      console.log("file uploaded");   
    }
   

  const blog = await Blog.create({
    title,
    author,
    content,
    fullContent,
    readTime,
    imageUrl: image.url,
    likes: 0,
    comments: 0
  });

  const createdBlog = await Blog.findById(blog._id);

  if (!createdBlog) {
    throw new ApiError(500, "Something went wrong while creating blog");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdBlog, "Blog created successfully"));
});

export const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, author, content, fullContent, readTime } = req.body;

  const blog = await Blog.findById(id);

  if (!blog) {
    throw new ApiError(404, "Blog not found");
  }

  if ([title, author, content, fullContent, readTime].some(
    (field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const imageLocalPath = req.files?.image?.[0]?.path;
  let imageUrl = blog.imageUrl;

  if (imageLocalPath) {
    const image = await uploadOn(imageLocalPath);
    if (!image) {
      throw new ApiError(400, "Error while uploading new image");
    }
    imageUrl = image.url;
  }

  blog.title = title;
  blog.author = author;
  blog.content = content;
  blog.fullContent = fullContent;
  blog.readTime = readTime;
  blog.imageUrl = imageUrl;

  await blog.save();

  return res
    .status(200)
    .json(new ApiResponse(200, blog, "Blog updated successfully"));
});

export const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const blog = await Blog.findById(id);

  if (!blog) {
    throw new ApiError(404, "Blog not found");
  }

  await blog.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Blog deleted successfully"));
});

export const getBlogById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const blog = await Blog.findById(id);

  if (!blog) {
    throw new ApiError(404, "Blog not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, blog, "Blog fetched successfully"));
});

export const getAllBlogs = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  const blogs = await Blog.find()
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  const totalBlogs = await Blog.countDocuments();

  return res.status(200).json(
    new ApiResponse(200, {
      blogs,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(totalBlogs / limit),
        totalBlogs
      }
    }, "Blogs fetched successfully")
  );
});

export const updateLikes = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const blog = await Blog.findById(id);

  if (!blog) {
    throw new ApiError(404, "Blog not found");
  }

  blog.likes += 1;
  await blog.save();

  return res
    .status(200)
    .json(new ApiResponse(200, blog, "Blog likes updated successfully"));
});
