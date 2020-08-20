/* 
    ini penulisan HTML di React jika dilakukan secara manual, tanpa memanfaatkan fiture JSX
*/

import React from 'react'

const Hello = () => {
    return (
        React.createElement("div", {id: "texthello"}, React.createElement("h1", null, "Hello"))
    )
}

export default Hello