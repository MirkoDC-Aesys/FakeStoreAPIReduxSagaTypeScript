import React, { useEffect, useState } from 'react'
import classes from './ToggleTheme.module.css'

const ToggleTheme = () => {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        let rootStyle = window.getComputedStyle(document.documentElement)
        let documentStyle = document.documentElement.style

        if (rootStyle.getPropertyValue('--bgcolor-primary') === '#fff') {
            documentStyle.setProperty('--color-primary', '#fff')
            documentStyle.setProperty('--color-secondary', 'gray')
            documentStyle.setProperty('--color-ternary', '#0F1111')
            documentStyle.setProperty('--bgcolor-primary', '#171010')
            documentStyle.setProperty('--bgcolor-secondary', '#6f7986')
        } else {
            documentStyle.setProperty('--color-primary', '#0F1111')
            documentStyle.setProperty('--color-secondary', '#565959')
            documentStyle.setProperty('--color-ternary', '#fff')
            documentStyle.setProperty('--bgcolor-primary', '#fff')
            documentStyle.setProperty('--bgcolor-secondary', '#6f7986')
        }
    }, [dark])

    return (
        <div className={classes.theme} onClick={() => setDark(prev => !prev)}>
            {
                dark ?
                    <i className="fas fa-sun"></i>
                    :
                    <i className="fas fa-moon"></i>
            }
        </div>
    )
}

export default ToggleTheme
