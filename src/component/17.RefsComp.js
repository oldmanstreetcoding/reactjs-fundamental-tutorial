/*
    refs digunakan untuk secara spesifik mengakses komponent (DOM) tertentu.
    pada contoh ini digunakan untuk focus cursor pada form input, dan di sini terlihat ada 2 cara
    1. this.inputRefs = React.createRef()
    2. this.cbRef = null dan this.setCbRef = (element) => { this.cbRef = element }
*/

import React, { Component } from 'react'

export class RefsComp extends Component {
    constructor(props) {
        super(props)
    
        this.inputRefs = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    halo = () => {
        alert(this.inputRefs.current.value)
    }

    componentDidMount() {
        // this.inputRefs.current.focus()
        if(this.cbRef) {
            this.cbRef.focus()
        }
    }
    
    render() {
        return (
            <div>
                {/* <input type='text' ref={this.inputRefs} /> */}
                <input type='text' ref={this.setCbRef} />
                <button onClick={this.halo}>Click</button>
            </div>
        )
    }
}

export default RefsComp
