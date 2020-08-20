/*
    pada child component ini di contohkan bahwa dapat membuat component yang berisi context 
    dengan static contextType = UserContext
*/

import React, { Component } from 'react'
import CompC from './24.Contex3'
import UserContext from './24.Contex1'

class CompB extends Component {
    
    static contextType = UserContext
    
    render() {

        return (
            <div>
                <h1>Ini {this.context}</h1>
                <CompC />
            </div>
        )
    }
}

// CompB.contextType = UserContext

export default CompB
