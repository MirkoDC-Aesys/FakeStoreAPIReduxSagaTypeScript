import React from 'react'
import classes from './Buy.module.css'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import Button from '../components/Button'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { useHistory } from 'react-router-dom'
import { REMOVE_PRODUCTS } from '../features/cart/cartSlice'

const schema = yup.object().shape({
    fullName: yup.string().required().typeError('A string is required'),
    email: yup.string().required().typeError('A string is required'),
    address: yup.string().required().typeError('A string is required'),
    city: yup.string().required().typeError('A string is required'),
    zip: yup.number().required().typeError('A number is required'),
    state: yup.string().required().typeError('A string is required'),
    cardName: yup.string().required().typeError('A string is required'),
    cardNumber: yup.number().required().typeError('A number is required'),
    cvv: yup.number().required().typeError('A number is required'),
    expMonth: yup.number().required().typeError('A number is required'),
    expYear: yup.number().required().typeError('A number is required'),
})

const Buy = () => {
    const { products } = useAppSelector(state => state.cart)
    const history = useHistory()
    const dispatch = useAppDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: yup.InferType<typeof schema>) => {
        console.log(data)
        alert('Success!!')
        dispatch(REMOVE_PRODUCTS())
        history.push('/')
    }

    const totalPrice = () => {
        return products.reduce((acc, prod) => {
            return acc + (parseInt(prod.price) * prod.amount)
        }, 0)
    }

    return (
        <div className={classes.container}>
            <div className={classes.form_container}>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.data_wrapper}>
                        <div className={classes.billing}>
                            <h2 className={classes.title}>Billing Address</h2>
                            <div>
                                <label htmlFor="FullName">Full Name</label>
                                <input type="text" id="FullName" {...register("fullName")} />
                                <div>{errors.fullName?.message}</div>
                            </div>
                            <div>
                                <label htmlFor="Email">Email</label>
                                <input type="text" id="Email" {...register("email")} />
                                <div>{errors.email?.message}</div>
                            </div>
                            <div>
                                <label htmlFor="Address">Address</label>
                                <input type="text" id="Address" {...register("address")} />
                                <div>{errors.address?.message}</div>
                            </div>
                            <div>
                                <label htmlFor="City">City</label>
                                <input type="text" id="City" {...register("city")} />
                                <div>{errors.city?.message}</div>
                            </div>
                            <div>
                                <label htmlFor="Zip">Zip</label>
                                <input type="number" id="Zip" {...register("zip")} />
                                <div>{errors.zip?.message}</div>
                            </div>
                            <div>
                                <label htmlFor="State">State</label>
                                <input type="text" id="State" {...register("state")} />
                                <div>{errors.state?.message}</div>
                            </div>
                        </div>
                        <div className={classes.payment}>
                            <h2 className={classes.title}>Payment</h2>
                            <div>
                                <label htmlFor="cardName">Name on Card</label>
                                <input type="text" id="cardName" {...register("cardName")} />
                                <div>{errors.cardName?.message}</div>
                            </div>
                            <div>
                                <label htmlFor="cardNumber">Credit card number</label>
                                <input type="number" id="cardNumber" {...register("cardNumber")} />
                                <div>{errors.cardNumber?.message}</div>
                            </div>
                            <div>
                                <label htmlFor="CVV">CVV</label>
                                <input type="number" id="CVV" {...register("cvv")} />
                                <div>{errors.cvv?.message}</div>
                            </div>
                            <div>
                                <label htmlFor="ExpMonth">Exp Month</label>
                                <input type="number" id="ExpMonth" {...register("expMonth")} />
                                <div>{errors.expMonth?.message}</div>
                            </div>
                            <div>
                                <label htmlFor="ExpYear">Exp Year</label>
                                <input type="number" id="ExpYear" {...register("expYear")} />
                                <div>{errors.expYear?.message}</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.btn_div}>
                        <Button onClick={() => { }} style={{ width: '90%', boxSizing: 'border-box' }}>BUY</Button>
                    </div>
                </form>
            </div>
            <div className={classes.cart_container}>
                <div className={classes.title}>
                    Cart
                </div>
                <div>
                    {products.map(prod => {
                        return <div className={classes.cartItem}>
                            <div>{prod.title}</div>
                            <span>${parseInt(prod.price) * prod.amount}</span>
                        </div>
                    })}
                </div>
                <hr />
                <div className={classes.total_price}>
                    <div>
                        Total
                    </div>
                    <span>
                        ${totalPrice()}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Buy
