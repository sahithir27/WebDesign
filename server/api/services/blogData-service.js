import Blog from '../models/blogs.js';

export const getBlogs = async () => {
    try{
        const blogs = Blog.find({});
        return blogs;
    }catch (error) {
        throw error;
    }
}

export const addBlogs = (blogItem) => {
    try {
        const blog = new Blog(blogItem);
        return blog.save();
    }
    catch (error) {
        throw error;
    }
}