/*
    ketika ingin sharing function/method antar component bisa menggunakan HighOrderComponent ini
*/

import React, { Component } from 'react'

const withCounter = (WrappedComponent, IncrementNumber) => {
    class WithCounter extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
    
        incrementCounter = () => {
            this.setState (prevState => {
                return {
                    count: prevState.count+IncrementNumber
                }
            })
        }

        render () {
            return <WrappedComponent 
                count={this.state.count} 
                incrementCounter = {this.incrementCounter}
                {...this.props}
            />
        }
    }

    return WithCounter
}

export default withCounter