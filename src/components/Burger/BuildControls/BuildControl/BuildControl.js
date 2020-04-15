import React from 'react'

import classes from './BuildControl.css'

const buildControl = ({ label, price, added, removed, disabled }) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{label}</div>
        <button
            className={classes.Less}
            onClick={removed}
            disabled={disabled}
        >Less</button>
        <button
            className={classes.More}
            onClick={added}
        >More</button>
        <p className={classes.Price}>${price.toFixed(2)}</p>
    </div>
)

export default buildControl 