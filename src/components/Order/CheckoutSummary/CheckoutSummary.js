import React from 'react';

import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) =>
{
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div>
                <Button
                    btnType="Danger"
                    clicked>CANCEL</Button>
                <Button
                    btnType="Success"
                    clicked>CONTINUE</Button>
            </div>
        </div>
    );
}

export default checkoutSummary;