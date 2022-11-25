import AppState from '../State';

const BlogsReducer = (state=AppState, action) =>{
    const type = action.type;
    let newBlogs;
    switch(type) {
        case 'GET_BLOG_DATA' :
            newBlogs = []
            let blogs = action.blogs
            blogs.forEach(function (item) {
                newBlogs.push(item);
              });
            break;
        default:
            newBlogs = [...state.blogs];
            break;
    }
    return Object.assign({}, state, { blogs : newBlogs });
}

export default BlogsReducer;
