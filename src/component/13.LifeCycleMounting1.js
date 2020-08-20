/*
    urutan lifecycle component di react ketika component pertama kali di render
*/

import React, { Component } from 'react'
import ChildComponent from './13.LifeCycleMount2';

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            
        }

        console.log('Life A : Constructor');

    }

    static getDerivedStateFromProps(props, state) {
        console.log('Life A : getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('Life A : ComponentDidUpdate');
    }

    shouldComponentUpdate() {
        console.log('Life A : shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log('Life A : getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('Life A : componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }
    
    render() {

        console.log('Life A : render');
        return (
            <div>
                <div>
                    Life Cycle A
                </div>
                <button onClick={this.changeState}>Click</button>
                <ChildComponent />
            </div>
            
        )
    }
}

export default LifeCycleA
