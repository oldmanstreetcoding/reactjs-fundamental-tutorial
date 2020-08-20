/*
    untuk mengambil variabel di global store context, maka child component harus dwrap dengan UserConsumer
*/

import React, { Component } from 'react'
import { UserConsumer } from './24.Contex1'

class CompC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                        return <h1>Hello {username}</h1>
                    }
                }
            </UserConsumer>
        )
    }
}

export default CompC
