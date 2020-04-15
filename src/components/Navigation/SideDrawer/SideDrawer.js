import React from 'react'

import classes from './SideDrawer.css'
import Aux from '../../../hoc/Aux/Aux'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

const compName = ({ closed, open }) =>
{
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (open)
    {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return <Aux>
        <Backdrop show={open} clicked={closed} />
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    </Aux>
}

export default compName