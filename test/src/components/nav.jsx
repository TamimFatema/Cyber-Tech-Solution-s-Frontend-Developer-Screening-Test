import React from 'react'
import MobileHeader from './MobileHeader'
import DeskView from './DeskView'

function nav() {
    return (
        <header>
            <DeskView />
            <MobileHeader />
        </header>
    )
}

export default nav
