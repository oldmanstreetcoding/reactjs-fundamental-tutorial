/*
    selain dengan HOC, untuk sharing method bisa juga menggunakan render props seperti child component ini
*/

import React, { Component } from 'react'
import withCounter from './22.HOC1'

export class HoverCounter extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }
    

    // HoverCounter = () => {
    //     this.setState( prevState => {
    //         return {
    //             count: prevState.count + 1
    //         }
    //     })
    // }

    render() {
        const {count, incrementCounter} = this.props
        return (
            <div>
                <h3 onMouseOver={incrementCounter}>Hovered {count} Times</h3>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 10)
