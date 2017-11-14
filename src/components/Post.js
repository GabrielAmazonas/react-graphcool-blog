import React, { Component } from 'react'

class Post extends Component {
  
    render() {
        const { post } = this.props 
        return (
            <li>
                {console.log(post)}
                <h1>{post.title}</h1>
                <h6>{post.createdAt}</h6>
                <p>{post.content}</p>
                <footer>By: {post.author.name}</footer>
            </li>
        )
    }




}

export default Post