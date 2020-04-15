import React from 'react'

import Aux from '../../../hoc/Aux/Aux'

import Button from '../../UI/Button/Button'

const orderSummary = ({ ingredientCounts, price, purchaseCanceled, purchaseContinued }) =>
{
    const ingredientSummary = Object.keys(ingredientCounts)
        .map(igKey =>
        {
            return <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {ingredientCounts[igKey]}
            </li>
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>That would be <strong>${price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" onClick={purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" onClick={purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary