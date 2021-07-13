import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import ProductCard from '../../components/ProductCard'
import classes from './Products.module.css'
import { GET_PRODUCTS } from './productsSlice'

const Products = () => {
    const dispatch = useAppDispatch()
    const { products, status } = useAppSelector(state => state.products)

    useEffect(() => {
        dispatch(GET_PRODUCTS())
    }, [])

    console.log(products)

    return (
        <div>
            {
                products.map(product => <ProductCard product={product} key={product.id} />)
            }

        </div>
    )
}

export default Products
