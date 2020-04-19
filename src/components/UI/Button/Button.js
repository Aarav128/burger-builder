import React from 'react'

import classes from './Button.css'

const button = ({ onClick, children, btnType, style }) => (
    <button
        onClick={onClick}
        className={[classes.Button, classes[btnType]].join(' ')}
        style={style}
    >
        {children}
    </button>
)

export default button