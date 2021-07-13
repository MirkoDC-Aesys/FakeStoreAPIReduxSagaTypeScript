import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { DELETE_PRODUCT, GET_PRODUCT } from './productSlice'
import classes from './Product.module.css'
import Button from '../../components/Button'
import { ADD_PRODUCT } from '../cart/cartSlice'

interface ParamType {
    id?: string
}

const Product = () => {
    const dispatch = useAppDispatch()
    const { product, status } = useAppSelector(state => state.product)
    const { id } = useParams<ParamType>()

    useEffect(() => {
        dispatch(GET_PRODUCT(id))

        return () => {
            dispatch(DELETE_PRODUCT())
        }
    }, [])

    console.log('product', product)

    return (
        <div className={classes.container}>
            <div className={classes.img}>
                <img src={product?.image} alt="" />
            </div>
            <div className={classes.content}>
                <div className={classes.title}>
                    {product?.title}
                </div>
                <div className={classes.price}>
                    $ {product?.price}
                </div>
                <div className={classes.category}>
                    {product?.category}
                </div>
                <div className={classes.description}>
                    {product?.description}
                </div>
                <div className={classes.button}>
                    <Button onClick={() => dispatch(ADD_PRODUCT(product))}>Add to cart</Button>
                </div>
            </div>
        </div>
    )
}

export default Product
