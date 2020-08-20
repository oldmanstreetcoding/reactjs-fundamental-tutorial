/* 
    ada 4 cara event binding di react, fungsinya memanfaatkan event trigger untuk merubah state
    1. dipanggil pada tombol : this.handleClick.bind(this)
    2. dipanggil pada tombol : ()=>this.handleClick()
    3. dipanggil pada constructor : this.handleClick = this.handleClick.bind(this)
    4. membuat arrow function yang akan di panggil pada button seperti contoh yang aktif sekarang
*/

import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hallo'
        }

        // 3. this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
    //     this.setState({
    //         message: 'Thank You'
    //     })
    // }
    handleClick = () => {
        this.setState({
            message: 'Thank You'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* ada 4 cara */}
                {/* 1. <button onClick={this.handleClick.bind(this)}>Click</button> */}
                {/* 2. <button onClick={()=>this.handleClick()}>Click</button> */}
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default EventBind
