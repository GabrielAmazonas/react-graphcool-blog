import React, { Component } from 'react'
import CreatePost from './CreatePost.js'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const postsToRender = [{
    id: '1',
    title: 'The First Post!',
    content: 'This is my first post! Hell yeah!',
    createdAt: '2017-11-05',
    author: { name: 'Gabriel Amazonas', id: '1' }
}, {
    id: '2',
    title: 'The Second!',
    content: 'Rubens Barrichelo is a Race Driver that always comes second!',
    createdAt: '2017-11-05',
    author: { name: 'Gabriel Amazonas', id: '1' }
}, {
    id: '3',
    title: 'The Third Post!',
    content: 'This is my third post! Hell yeah!',
    createdAt: '2017-11-05',
    author: { name: 'Gabriel Amazonas', id: '1' }
}]

class PostList extends Component {
    
    render() {
        if(this.props.data && this.props.data.loading){
            return <div> Loading Posts</div>
        }

        if(this.props.data && this.props.data.error){
            return <div> Error</div>
        }

        const postsToRender = this.props.data.allPosts

        console.log(postsToRender)
        return (
            <div>
                <ol>
                    {postsToRender.map(post => (
                        <li key={post.id}>
                            {console.log(post)}
                            <h1>{post.title}</h1>
                            <h6>{post.createdAt}</h6>
                            <p>{post.content}</p>
                            <footer>By: {`${post.author.lastName}, ${post.author.firstName}`}</footer>
                        </li>
                    ))}
                </ol>
                <div>
                    <CreatePost />
                </div>
            </div>
        )
    }




}

export default graphql(gql`
query allPostsQuery{
    allPosts{
        id
        createdAt
        title
        content
        author{
            firstName
            lastName
        }
        comments{
            text
        }
    }
}
`)(PostList)
