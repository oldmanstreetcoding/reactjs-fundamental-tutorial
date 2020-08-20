/*
    dengan menggunakan fragment, maka tidak perlu membuat wrapper div lagi yang sebenranya tidak perlu
*/

import React from 'react'
import Columns from './14.Fragments2'

function FragmentDemo() {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <Columns/>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FragmentDemo
