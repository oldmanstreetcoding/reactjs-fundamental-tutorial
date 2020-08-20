import React, { Component } from 'react'

export class Input extends Component {
    constructor(props) {
        super(props)
    
        this.refInput = React.createRef()
    }

    focusInput = () => {
        this.refInput.current.focus()
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.refInput}/>
            </div>
        )
    }
}

export default Input
