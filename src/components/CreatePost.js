import React, { Component } from 'react'

class CreatePost extends Component {

    state = {
        title: '',
        createdAt: null,
        author: null,
        content: null
    }

    componentDidMount () {
        this.setState({createdAt: new Date()})
    }
  
    render() {
        const { createdAt } = this.state 
        return (
            <div>
                <textarea
                    maxLength={5000}
                    cols={200}
                    rows={10}
                    onChange={(e) => this.setState({content: e.target.value}) }
                    placeholder={'Type here your post content...'}
                />
                <input
                    placeholder={'Type here your post title...'}
                    onChange={(e) => this.setState({title: e.target.value})} />
            </div>
            
        )
    }




}

export default CreatePost