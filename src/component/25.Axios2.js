/*
    contoh HTTP Post fetching data API di react menggunakan axios
*/

import React, { Component } from 'react'
import Axios from 'axios'

export class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId: '',
             title:'',
             body:''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
        Axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    render() {
        const {userId, title, body} = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    userId : <input onChange={this.changeHandler} name='userId' type='text' value={userId} />
                </div>
                <div>
                    title : <input onChange={this.changeHandler} name='title' type='text' value={title} />
                </div>
                <div>
                    body : <input onChange={this.changeHandler} name='body' type='text' value={body} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}

export default PostForm
