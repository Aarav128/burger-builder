import React from 'react'

import classes from './OpenSideDrawer.css'

const openSideDrawer = ({ clicked }) => (
    <div className={classes.OpenSideDrawer} onClick={clicked} >
        <div />
        <div />
        <div />
    </div>
)

export default openSideDrawer