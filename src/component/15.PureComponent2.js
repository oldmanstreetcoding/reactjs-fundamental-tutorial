/*
    component yang di buat dengan purecomponent, keunggulannya component hanya akan di render jika memang benar2 berubah  
*/

import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log('PureComp');
        return (
            <div>
                <h1>Pure Component {this.props.name}</h1>
            </div>
        )
    }
}

export default PureComp
