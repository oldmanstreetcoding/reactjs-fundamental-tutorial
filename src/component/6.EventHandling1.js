/* 
    event handling pada functional component, setelah onclick langsung nama fungsinya tanpa this
*/

import React from 'react'

function FunctionClick() {

    // const handleClick = () => {
    //     console.log('sukses');
    // }
    function handleClick() {
        console.log('oldclick');
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default FunctionClick
