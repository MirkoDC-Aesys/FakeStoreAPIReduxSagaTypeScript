import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Button from '../../components/Button'
import classes from './Cart.module.css'
import { ADD_PRODUCT, REMOVE_PRODUCT, REMOVE_ONE } from './cartSlice'

const Cart = () => {
    const dispatch = useAppDispatch()
    const { products } = useAppSelector(state => state.cart)
    const history = useHistory()

    return (
        <div className={classes.container}>
            {
                products.length > 0 ?
                    <div>
                        {products.map(prod => (
                            <div className={classes.element} key={prod.id}>
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
                                        Amount:
                                        <Button onClick={() => dispatch(REMOVE_ONE(prod.id))} style={{ padding: '0 0.5rem' }}>-</Button>
                                        {prod.amount}
                                        <Button onClick={() => dispatch(ADD_PRODUCT(prod))} style={{ padding: '0 0.5rem' }}>+</Button>
                                    </div>
                                    <div className={classes.total}>
                                        Total price:<span> ${(parseFloat(prod.price) * prod.amount).toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className={classes.remove}>
                                    <Button onClick={() => dispatch(REMOVE_PRODUCT(prod.id))} style={{ padding: '0.3rem 0.4rem 0.4rem', background: 'red' }}>remove</Button>
                                </div>
                            </div>
                        ))}
                        < div className={classes.buy} >
                            <Button onClick={() => { history.push('/buy') }}>BUY</Button>
                        </div>
                    </div>
                    :
                    <div className={classes.empty}>The cart is empty!</div>
            }
        </div >
    )
}

export default Cart
