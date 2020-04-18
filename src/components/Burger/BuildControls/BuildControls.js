import React from 'react'

import classes from './BuildControls.css'

import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Bacon', type: 'bacon' },
    { label: 'Beef', type: 'beef' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Salad', type: 'salad' },
    { label: 'Veg Patty', type: 'vegpatty' }
]

const BuildControls = ({ ingredientPrices, ingredientAdded, ingredientRemoved, disabled, purchaseable, price, ordered }) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>${price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                price={ingredientPrices[ctrl.type]}
                added={() => ingredientAdded(ctrl.type)}
                removed={() => ingredientRemoved(ctrl.type)}
                disabled={disabled[ctrl.type]}
            />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!purchaseable}
            onClick={ordered}
        >ORDER NOW</button>
    </div>
)

export default BuildControls 