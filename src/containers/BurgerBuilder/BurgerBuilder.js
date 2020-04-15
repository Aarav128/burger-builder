import React, { Component } from 'react'

import Aux from '../../hoc/Aux'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.7,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component
{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseState = (ingredients) =>
    {
        const sum = Object.keys(ingredients)
            .map(igKey => 
            {
                return ingredients[igKey]
            })
            .reduce((sum, el) => sum + el, 0)
        this.setState({ purchaseable: sum > 0 })
    }

    addIngredientHandler = (type) =>
    {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = updatedCount

        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = (type) =>
    {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) return
        const updatedCount = oldCount - 1
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = updatedCount

        const priceSubtraction = INGREDIENT_PRICES[type]
        console.log(priceSubtraction)
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceSubtraction

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
        this.updatePurchaseState(updatedIngredients)
    }

    purchaseHandler = () =>
    {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () =>
    {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () =>
    {
        alert('Order success! We hope you come back soon!')
        this.setState({
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchaseable: false,
            purchasing: false
        })
    }

    render()
    {
        const disabledInfo = { ...this.state.ingredients }

        for (let key in disabledInfo)
        {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return <Aux>
            <Modal
                show={this.state.purchasing}
                modalClosed={this.purchaseCancelHandler}
            >
                <OrderSummary
                    ingredients={this.state.ingredients}
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                />
            </Modal>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchaseable={this.state.purchaseable}
                price={this.state.totalPrice}
                ordered={this.purchaseHandler}
            />
        </Aux>
    }
}

export default BurgerBuilder