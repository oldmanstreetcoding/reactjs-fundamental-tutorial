/*
    child component yang digunakan untuk merender list
*/

import React from 'react'

function Person({person}) {
    return (
        <div>
            <h1>Hi i'm {person.name}, i'm a {person.sex}</h1>
        </div>
    )
}

export default Person
