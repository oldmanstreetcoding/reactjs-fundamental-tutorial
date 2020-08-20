/* 
  cara membuat function expression (arrow function)
*/

import React from 'react'

// function Greet() {
//     return <h1>Tes</h1>
// }

const Greet = props => {
    const {name} = props
    return (
        <div>
            <h1>{name}</h1>
            {props.children}
        </div>
    )
}

export default Greet