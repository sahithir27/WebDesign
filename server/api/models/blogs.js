import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    blogTitle: {
        type: String,
        required: "Blog Title is required",

    },

    description: {
        type: String,
        required: "Description is required",
    },

    author: {
        type: String,
        required: "Author is required",
    },

    imgUrl: {
        type: String,
        required: "Image is required",
        default: "https://ask.sqlservercentral.com/themes/base/admin/img/default-coverImage.png",
    }
})

const model = mongoose.model('blogMasterData', blogSchema);
export default model;