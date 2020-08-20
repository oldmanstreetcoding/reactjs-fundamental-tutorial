/* 
    variabel di react menggunakan state, biasanya di definisikan di constructor dengan sebelumnya memanggil super(),
    untuk menggunakan variabel di constructor atau memanggil function, di class selalu menggunakan this
*/

import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visiter'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank You For Subscribing !'  
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscriber</button>
            </div>
        )
    }
}

export default Message