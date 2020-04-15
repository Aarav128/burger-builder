import React from 'react'

import classes from './Burger.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = ({ ingredients }) =>
{
    let igList = Object.keys(ingredients)
        .map(igKey => 
        {
            return [...Array(ingredients[igKey])].map((_, i) => 
            {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        })
        .reduce((arr, el) =>
        {
            return arr.concat(el)
        }, [])
    if (igList.length === 0)
    {
        igList = <p>Please start adding ingredients!</p>
    }

    return <div className={classes.Burger}>
        <BurgerIngredient type='bread-top' />
        {igList}
        <BurgerIngredient type='bread-bottom' />
    </div >
}

export default burger