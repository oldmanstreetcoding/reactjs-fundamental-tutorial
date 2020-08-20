/*
    ada 3 cara membuat list di halaman dari object atau array yang di dapat menggunakan map
    1. names.map((name, index) => <h1 key={index}>{index} {name}</h1>)
    2. membuat variabel personList yang menampung list dari looping map array
    3. tiap isi list di buatkan master component

    perhatikan pada penguraian map, selalu perlu parameter key=id
*/

import React from 'react'
import Person from './10.ListRendering2'

function ListName() {

    // const names = ['Furqan', 'Manda', 'Ganapatih']
    // const nameList = names.map(name => <h1>{name}</h1>)

    const persons = [
        {
            id: 1,
            name: 'furqan',
            sex: 'male'
        },
        {
            id: 2,
            name: 'manda',
            sex: 'female'
        },
        {
            id: 3,
            name: 'ganapatih',
            sex: 'male'
        }
    ]

    // const personList = persons.map(person => <h1>Hi i'm {person.name}, i'm a {person.sex}</h1>)
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    
    return (
        <div>
            {
                // ada 3 cara
                // names.map((name, index) => <h1 key={index}>{index} {name}</h1>)
                // nameList
                personList
            }
        </div>
    )
}

export default ListName
