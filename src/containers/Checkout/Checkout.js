import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux/Aux';

class Checkout extends Component
{
    state = {
        ingredients: ["cheese", "salad", "vegpatty"]
    }

    render()
    {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>
                    <CheckoutSummary ingredients={this.state.ingredients} />
                </div>
            </Aux>
        );
    }
}

export default Checkout;