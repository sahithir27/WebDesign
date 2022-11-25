import './Blogs.scss'
import BlogItem from './BlogItem/BlogItem.js'
import getBlogs from '../../Store/Actions/BlogsAction.js'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStoreToProps = (state) => ( state.blogs );

const mapDispatchToProps = dispatch => bindActionCreators({
  getBlogs
},dispatch);

class BlogsComponent extends Component {
  constructor(props) {
    super(props)
    this.callApi = this.callApi.bind(this);
  }
  
  componentDidMount() {
    this.callApi();
  }
  
  //api call 
  callApi = () => {    
    this.props.getBlogs('http://localhost:9002/blogsData')
  };

  render() {
    const blogs = this.props.blogs
    const items = blogs.map((blog,i) => <BlogItem 
    key={i}
    blogitem={blog} 
    index={i}>
    </BlogItem>)
    return (
      <div className='blogs-container'>
        {items}
      </div>
    )
  }
}

const Blogs = connect(mapStoreToProps, mapDispatchToProps)(BlogsComponent)

export default Blogs