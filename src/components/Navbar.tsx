import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import classes from './Navbar.module.css'

const Navbar = () => {
    const { products } = useAppSelector(state => state.cart)

    return (
        <nav className={classes.nav}>
            <Link to='/'>
                <div className={classes.title}>Shop</div>
            </Link>
            <div className={classes.cart}>
                <Link to='/cart'>
                    <i className="fas fa-shopping-cart"></i>
                    <div className={classes.circle}>
                        {products.length}
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
