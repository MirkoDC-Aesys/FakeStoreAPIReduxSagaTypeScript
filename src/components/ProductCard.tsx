import React from 'react'
import classes from './ProductCard.module.css'
import { ProductsState, ProductState } from '../features/products/productsSlice'

interface Props {
    product: ProductState
}

const ProductCard: React.FC<Props> = ({ product: {
    id,
    title,
    price,
    category,
    description,
    image
} }) => {
    return (
        <div className={classes.card}>
            <div className={classes.img}>
                <img src={image} alt={title} />
            </div>
            <div className={classes.title}>
                {title}
            </div>
            <div className={classes.price}>
                {price}
            </div>
            <div className={classes.category}>
                {category}
            </div>
        </div>
    )
}

export default ProductCard
