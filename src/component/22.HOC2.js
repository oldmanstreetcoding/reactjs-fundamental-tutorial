/*
    contoh child component yang menggunakan HOC
*/

import React, { Component } from 'react'
import withCounter from './22.HOC1'

export class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }

    // incrementCounter = () => {
    //     this.setState (prevState => {
    //         return {
    //             count: prevState.count+1
    //         }
    //     })
    // }
    
    render() {
        return (
            <div>
                <button onClick={this.props.incrementCounter}>Clicked {this.props.count} Times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 5)
