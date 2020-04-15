import React from 'react'

import classes from './Burger.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = ({ ingredients }) =>
{
    let igList
    if (ingredients.length === 0)
    {
        igList = <p>Build your Burger!</p>
    }
    else 
    {
        igList = [...ingredients].map((ig, i) =>
        {
            return <BurgerIngredient type={ig} key={ig + i} />
        })
    }

    return <div className={classes.Burger}>
        <BurgerIngredient type='bread-top' />
        {igList}
        <BurgerIngredient type='bread-bottom' />
    </div >
}

export default burger