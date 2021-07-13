import React from 'react'
import classes from './Button.module.css'

interface Props {
    onClick: () => void,
    style?: object
}

const Button: React.FC<Props> = ({ onClick, style = {},  children }) => {
    return (
        <button onClick={onClick} className={classes.btn} style={style}>
            {children}
        </button>
    )
}

export default Button
