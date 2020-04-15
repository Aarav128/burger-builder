import React from 'react'

import burgerLogo from '../../assets/images/logo.png'
import classes from './Logo.css'

const logo = ({ height }) => (
    <div className={classes.Logo} style={{ height }}>
        <img src={burgerLogo} alt="Build your Burger!" />
    </div>
)

export default logo