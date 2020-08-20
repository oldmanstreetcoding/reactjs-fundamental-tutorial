/*
    React Portals di gunakan jika ingin merender component di luar div utama menggunakan reactDOM
*/

import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>
           Portals Demo 
        </h1>,
        document.getElementById("portal-root")
    )
}

export default PortalDemo

