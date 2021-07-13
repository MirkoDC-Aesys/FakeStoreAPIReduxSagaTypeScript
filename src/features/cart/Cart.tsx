import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Button from '../../components/Button'
import classes from './Cart.module.css'
import { ADD_PRODUCT, REMOVE_ONE_PRODUCT } from './cartSlice'

const Cart = () => {
    const dispatch = useAppDispatch()
    const { products } = useAppSelector(state => state.cart)

    return (
        <div className={classes.container}>
            {
                products.map(prod => (
                    <div className={classes.element}>
                        <div className={classes.img}>
                            <img src={prod.image} alt={prod.title} />
                        </div>
                        <div className={classes.elementContent}>
                            <div className={classes.title}>
                                {prod.title}
                            </div>
                            <div>
                                Price: ${prod.price}
                            </div>
                            <div>
                                <Button onClick={() => dispatch(REMOVE_ONE_PRODUCT(prod.id))} style={{padding: '0 0.5rem'}}>-</Button>
                                Amount: {prod.amount}
                                <Button onClick={() => dispatch(ADD_PRODUCT(prod))} style={{padding: '0 0.5rem'}}>+</Button>
                            </div>
                            <div className={classes.total}>
                                Total price:<span> ${(parseFloat(prod.price) * prod.amount).toFixed(2)}</span>
                            </div>
                        </div>
                        <div className={classes.buy}>
                            <Button onClick={() => {}}>BUY</Button>
                        </div>
                    </div>
                )
                )
            }
        </div>
    )
}

export default Cart
