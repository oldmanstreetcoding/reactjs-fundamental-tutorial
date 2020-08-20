/*
    refs dari parent ke child component
*/

import React, { Component } from 'react'
import Input from './18.RefsParentChild2'

export class FocusInput extends Component {
    constructor(props) {
        super(props)
    
        this.refParent = React.createRef()
    }

    handleClick = () => {
        this.refParent.current.focusInput()
    }
    
    render() {
        return (
            <div>
                <Input ref={this.refParent}/>
                <button onClick={this.handleClick}>Focus</button>
            </div>
        )
    }
}

export default FocusInput
