/*
    ada 3 cara menggunakan css di component js
    1. menggunakan external css
    2. inline css, di mana css langsung d halaman ini dengan konstanta heading
    3. membuat file css dengan ekstensi module.css
*/

import React from 'react'
import '../styles/myStyle.css'
import styles from '../styles/appstyle.modul.css'

function Stylesheet() {
    const heading = {
        color: 'red',
        fontSize: '72px'
    }

    return (
        <div>
            <div className='primary'>
                Stylesheet
            </div>
            <div style={heading}>
                Inline
            </div>
            <div className={styles.success}>
                Module
            </div>
        </div>
    )
}

export default Stylesheet
