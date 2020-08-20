/*
    contoh HTTP Get fetching data API di react menggunakan axios
*/

import React, { Component } from 'react'
import Axios from 'axios'

export class DataList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errMsg: ''
        }
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            console.log(response.data);
            this.setState({
                posts: response.data
            })
        })
        .catch((error)=>{
            console.log(error);
            this.setState({
                errMsg: 'Error Retrieving Data'
            })
        })
    }
    
    render() {
        const {posts, errMsg} = this.state
        return (
            <div>
                {
                    posts.length ? 
                    posts.map(post => <div key={post.id}>{post.title}</div>) : null
                }
                { errMsg ? <div>{errMsg}</div> : null}
            </div>
        )
    }
}

export default DataList
