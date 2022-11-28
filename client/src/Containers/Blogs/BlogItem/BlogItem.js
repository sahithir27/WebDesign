import './BlogItem.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReadMore from './../ReadMore/ReadMore.js'

//component to show details of selected to-do item
export class BlogItemComponent extends Component {
    // constructor() {
    //   super(); 
    // }
    render() {
        return (
        <div className='blogitem'>
            <div>
                <div>
                    <img src={this.props.blogitem.imgUrl}></img>
                    <div className='blogtitle'>{this.props.blogitem.blogTitle}</div>
                </div>
                <ReadMore id='blogdescription' className='blogdescription'>{this.props.blogitem.description}</ReadMore>
            </div>
            <p>Author : {this.props.blogitem.author}</p>
        </div>
        )
    }
}

const BlogItem = connect(null, null)(BlogItemComponent);

export default BlogItem