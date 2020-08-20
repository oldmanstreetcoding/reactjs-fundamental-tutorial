/*
    scrip utama penggunaan context sebagai state management di react. dengan context state dapat di simpan di top
    level component (misal app.js atau index.js) dan dapat digunakan dengan mudah oleh seluh child component
*/

import React from 'react'

const UserContext   = React.createContext('Ganapatih')

const UserProvider  = UserContext.Provider
const UserConsumer  = UserContext.Consumer

export {
    UserProvider,
    UserConsumer
}

export default UserContext
