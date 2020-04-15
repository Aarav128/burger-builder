import React, { Component } from 'react'

import Aux from '../../hoc/Aux/Aux'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.7,
    beef: 1.3,
    bacon: 0.7,
    vegpatty: 1.7
}

class BurgerBuilder extends Component
{
    state = {
        ingredients: [],
        ingredientCounts: {
            salad: 0,
            cheese: 0,
            beef: 0,
            bacon: 0,
            vegpatty: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseState = (ingredients) =>
    {
        this.setState({ purchaseable: ingredients.length > 0 })
    }

    addIngredientHandler = (type) =>
    {
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition

        const updatedIngredients = [...this.state.ingredients, type]

        const updatedCounts = { ...this.state.ingredientCounts }
        updatedCounts[type] += 1

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice, ingredientCounts: updatedCounts })
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = (type) =>
    {
        const priceSubtraction = INGREDIENT_PRICES[type]
        console.log(priceSubtraction)
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceSubtraction

        const updatedCounts = { ...this.state.ingredientCounts }
        updatedCounts[type] -= 1

        let updatedIngredients = [...this.state.ingredients]
        let igToRemove = updatedIngredients.findIndex((ig) => ig === type)
        updatedIngredients.splice(igToRemove, 1)

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice, ingredientCounts: updatedCounts })
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
            ingredients: [],
            ingredientCounts: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                beef: 0,
                vegpatty: 0
            },
            totalPrice: 4,
            purchaseable: false,
            purchasing: false
        })
    }

    render()
    {
        const disabledInfo = { ...this.state.ingredientCounts }

        for (let key in disabledInfo)
        {
            disabledInfo[key] = disabledInfo[key] <= 0
            console.log(disabledInfo[key])
        }
        return <Aux>
            <Modal
                show={this.state.purchasing}
                modalClosed={this.purchaseCancelHandler}
            >
                <OrderSummary
                    ingredientCounts={this.state.ingredientCounts}
                    price={this.state.totalPrice}
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                />
            </Modal>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
                ingredientPrices={INGREDIENT_PRICES}
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