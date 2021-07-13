import React from 'react'
import classes from './Button.module.css'

interface Props {
    onClick: () => void
}

const Button: React.FC<Props> = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className={classes.btn}>
            {children}
        </button>
    )
}

export default Button
