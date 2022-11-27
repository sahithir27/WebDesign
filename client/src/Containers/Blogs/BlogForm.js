import React, { Component } from 'react'
import { addTodoItemAction } from '../../Store/Actions/BlogsAction.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MiniLoader from "../../components/Loader/MiniLoader";
import axios from "axios";

const mapDispatchToProps = dispatch => bindActionCreators({
    add: (url, payload) => dispatch(addTodoItemAction(url, payload))
  },dispatch);
  

export class BlogFormComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { showForm: false,
            imgUrl: ''
        }

      }
      fileSelectedHandler = (e) =>{
        
        this.setState({
            selectedImage: e.target.files[0]
        }, async ()=> {
            try {
                let imageUrl = "";
                if (this.state.selectedImage) {
                    const formData = new FormData();
                    formData.append("file", this.state.selectedImage);
                    formData.append("upload_preset", "Flexx-Appeal");
                    let config = {
                        onUploadProgress : ProgressEvent => {
                            let percentageCompleted = Math.floor((ProgressEvent.loaded * 100) / ProgressEvent.total);
                            this.setState({
                                imageUploadStatus: percentageCompleted
                            })

                            if(percentageCompleted === 100){
                                this.setState({
                                    imageUploadStatus: ""
                                }) 
                            }
                            
                        }
                    }
                    const response = await axios.post("https://ask.sqlservercentral.com/themes/base/admin/img/default-coverImage.png", formData, config);
                    imageUrl = response.data.url;
                }
                this.setState({
                    profileImageUrl: imageUrl
                });
            } catch (err) {
                console.log('error while uploading image to cloudinary');
            }
        })
        
    }

    addNewBlog() {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const author = document.getElementById('author').value;
        const payload = {
          blogTitle: title,
          description: description,
          author: author,
          imgUrl: "http://event360.com/wp-content/uploads/2012/01/iStock-858790856-e1537308976623.jpg"
        }
        console.log(JSON.stringify(payload))
        this.props.add("http://localhost:9002/blogsData/", payload)
      }
  render() {
    return (
        <form className="new-blog-form" method="get">
        <ul>
          <li>
            <input type="text" className="title" id="title" name="blog_title" placeholder="Title" />
          </li>
          <li>
            <textarea className="description" id="description" name="blog_description" placeholder='Write a blog...'></textarea>
          </li>
          <li>
            <input type="text" id="author" name="blog_author" placeholder='Author'/>
          </li>
        </ul>
        {/* <div className="image-holder">
            <div className="Mini-loader">
                <MiniLoader height={230} width={305} />
            </div> :  <img src={this.props.imgUrl}></img>
            <input type="file" accept="image/*" onChange={this.fileSelectedHandler.bind(this)} ref={fileInput => this.fileInput = fileInput}></input>
        </div> */}
        <button className='post-button' onClick={this.addNewBlog.bind(this)}>Post</button>
      </form>
    )
  }
}

const BlogForm = connect(null, mapDispatchToProps)(BlogFormComponent)

export default BlogForm
