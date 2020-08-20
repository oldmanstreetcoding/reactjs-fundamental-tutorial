/*
    cara mengelola form di react agak ribet, misalnya untuk mengetik di kolom input saja harus menggunakana event onChange
    lalu untuk submit form menggunakan event onSubmit yang di sertakan di form atau di button submit
*/

import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: ''
        }
    }

    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username : </label>
                    <input type='text' value={this.state.username} onChange={this.handleUsername}/>
                </div>
                <div>
                    <label>Comments : </label>
                    <textarea onChange={this.handleComments}>{this.state.comments}</textarea>
                </div>
                <div>
                    <label>Topic : </label>
                    <select value={this.state.topic} onChange={this.handleTopic}>
                        <option value=""></option>
                        <option value="angular">Angular</option>
                        <option value="Vue">Vue</option>
                        <option value="React">React</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form
