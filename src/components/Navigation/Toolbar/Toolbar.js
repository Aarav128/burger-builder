import React from 'react'

import classes from './Toolbar.css'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import OpenSideDrawer from '../OpenSideDrawer/OpenSideDrawer.js'

const toolbar = ({ openSideDrawer }) => (
    <header className={classes.Toolbar}>
        <OpenSideDrawer clicked={openSideDrawer} />
        <Logo />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar