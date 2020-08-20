/*
    urutan lifecycle component di react ketika ada update data
*/

import React, { Component } from 'react'

export class ChildComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }

        console.log('Life B : Constructor');

    }

    static getDerivedStateFromProps(props, state) {
        console.log('Life B : getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('Life B : ComponentDidUpdate');
    }

    shouldComponentUpdate() {
        console.log('Life B : shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log('Life B : getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('Life B : componentDidUpdate');
    }
    
    render() {

        console.log('Life B : render');
        return (
            <div>
                Life Cycle B
            </div>
        )
    }
}

export default ChildComponent
