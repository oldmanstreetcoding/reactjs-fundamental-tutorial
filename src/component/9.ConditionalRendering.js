/*
    ada 4 cara merender halaman sesuai kondisi tertentu
    1. menggunakan operator ternary ?
    2. membuat variabel yang akan menampung JSX sesuai kondisi
    3. memnggunakan if condition yang akan mereturn jsx sesuai kondisi
    4. jika ingin merender atau tidak sama sekali : return this.state.isLogged && <div><h1>Hello Furqan</h1></div>
*/

import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogged: false
        }
    }
    
    render() {

        // ada 4 cara

        return this.state.isLogged ? (<h1>Hello Furqan</h1>) : (<h1>Hello Guest</h1>)

        // return this.state.isLogged && <div><h1>Hello Furqan</h1></div>

        // let message
        // if(this.state.isLogged){
        //     message = "Hello Furqan"
        // }else{
        //     message = "Hello Guest"
        // }

        // return <h1>{message}</h1>

        // if(this.state.isLogged){
        //     return <h1>Hello Furqan</h1>
        // }else{
        //     return <h1>Hello Guest</h1>
        // }

    }
}

export default UserGreeting
