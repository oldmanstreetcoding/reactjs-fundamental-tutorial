/* 
    event handling pada class component, pastikan trigger memanggil function dengan keyword this
*/

import React, { Component } from 'react'

class ClassClick extends Component {

    handleFire() {
        console.log("i'm fired");
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleFire}>Fire Me !</button>
            </div>
        )
    }
}

export default ClassClick
