import { httpUtils } from './../utils/index.js';
import { blogData } from './../services/index.js';

export const getBlogs = async (request, response) => {
    try{
        const blogs = await blogData.getBlogs();
        httpUtils.setSuccessResponse(blogs, response);
    } catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}

export const addBlogs = async (request, response) => {
    try {
        const payload = request.body;
        const blogItem = await blogData.addBlogs(payload);
        httpUtils.setSuccessResponse(blogItem, response);
    }
    catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}