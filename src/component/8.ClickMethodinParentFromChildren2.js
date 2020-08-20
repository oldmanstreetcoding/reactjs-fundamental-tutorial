/*
    cara memanggil method pada parent dari children component, script ini adalah child componentnya
*/

import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
