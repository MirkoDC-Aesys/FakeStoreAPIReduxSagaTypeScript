import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.title}>Shop</div>
            <div className={classes.cart}>
                <Link to='/cart'>
                    <i className="fas fa-shopping-cart"></i>
                    <div className={classes.circle}>
                        0
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
