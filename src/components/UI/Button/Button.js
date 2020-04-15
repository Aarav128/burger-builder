import React from 'react'

import classes from './Button.css'

const button = ({ onClick, children, btnType }) => (
    <button
        onClick={onClick}
        className={[classes.Button, classes[btnType]].join(' ')}
    >
        {children}
    </button>
)

export default button