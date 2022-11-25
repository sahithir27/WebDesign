import express from "express";
import * as blogsData from '../controllers/blogs-controller.js';

const router = express.Router();

router.route('/blogsData')
    .get(blogsData.getBlogs)
    .post(blogsData.addBlogs)

export default router