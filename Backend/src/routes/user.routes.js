import { Router } from "express";
import {sendEmail,fetchTestimonials,postTestimonials, Consultancy,createBlog,
    deleteBlog,
    updateBlog,
    getBlogById,
    getAllBlogs,
    updateLikes,} from "../controllers/user.controller.js"

import { upload } from "../middleware/multer.middleware.js";
const router = Router();

router.route("/blogs")
  .get(getAllBlogs)
  .post(
    upload.fields([
      {
        name: "image",
        maxCount: 1,
      },
    ]),
    createBlog
  );

 router.route("/blogs/:id")
  .get(getBlogById)
  .put(
    upload.fields([
      {
        name: "image",
        maxCount: 1,
      },
    ]),
    updateBlog
  )
  .delete(deleteBlog);

router.route("/blogs/:id/like")
  .post(updateLikes);

router.route("/sendmail").post(sendEmail);
router.route("/fetchtesti").get(fetchTestimonials);
router.route("/posttest").post(postTestimonials)
router.route("/form").post(Consultancy)

export default router
