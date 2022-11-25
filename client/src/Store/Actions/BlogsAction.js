export const BlogActionType = {
    ADD_BLOG : '[BlogItem] Add Blog item',
    UPDATE_BLOG : '[BlogItem] Update Blog item'
}

//Action method to Get Blogs to the api using Fetch
const getBlogs = (url) => {
    return dispatch => {
        return fetch(url, { method: 'GET'}).then(res => {
            return res.json();
        }).then(res => {
            dispatch({type : 'GET_BLOG_DATA',
                    blogs : res })
        }).catch(err => {
            console.log('API failed')
        })
    }
}
export default getBlogs