/* 
    cara merubah variabel di class component hanya melalui setState(), jika ingin menggunakan variabel sebelum perubahan state,
    maka dalam setState panggil arrow function dengan memanggil prevState
*/

import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count+1
        // }, () => {
        //     console.log('Callback Value : ', this.state.count);
        // })
        this.setState((prevState)=>({
            count: prevState.count+1
        }))
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    render() {
        return (
            <div>
                <div>
                    {this.state.count}
                </div>
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
