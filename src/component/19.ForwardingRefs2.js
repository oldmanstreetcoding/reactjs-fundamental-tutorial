/*
    child component ini berisi input component yang akan di perintahkan focus dari parent
*/

import React from 'react'

const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})

export default FRInput
