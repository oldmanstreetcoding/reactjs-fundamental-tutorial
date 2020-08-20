/*
    memo adalah pure component versi functional component, component hanya akan di render ulang jika ada perubahan
*/

import React from 'react'

function MemoComp({name}) {
    console.log('Memo Comp');
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
