/*
    container page untuk melihat perbedaan purecomponent dan regular class component
*/

import React, { Component } from 'react'
import MemoComp from '../16.MemoComp';
// import PureComp from './15.PureComponent2'
// import RegComp from './15.PureComponent3'

export class ParentPureComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Furqan'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Furqan'
            })
        }, 2000);
    }
    
    render() {
        console.log('=== Parent Comp ===');
        return (
            <div>
                <h1>Parent Component</h1>
                <MemoComp name={this.state.name}/>
                {/* <PureComp name={this.state.name}/>
                <RegComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentPureComp
