/* 
    cara membuat component menggunakan class component, 
    di sini terlihat penggunaan this untuk akses variabel yang di lempar dari parent (props)
*/

import React, { Component } from 'react'

class Welcome extends Component {
    
    render() {
        const {name} = this.props
        return <h1>{name}</h1>
    }
}

export default Welcome