/*
    cara lain penggunaan refs dari parent ke child component menggunakan React.forwardRef,
    ketika tombol button di parent di klik, maka input component di child akan focus
*/

import React, { Component } from 'react'
import FRInput from './19.ForwardingRefs2'

export class FRParentInput extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <FRInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus</button>
            </div>
        )
    }
}

export default FRParentInput
