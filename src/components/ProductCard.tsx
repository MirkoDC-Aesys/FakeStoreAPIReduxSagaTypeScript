import React from 'react'
import classes from './ProductCard.module.css'
import { Product } from '../features/product/productSlice'
import { Link } from 'react-router-dom'

interface Props {
    product: Product
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
            <Link to={`product/${id}`}>
                <div className={classes.img}>
                    <img src={image} alt={title} />
                </div>
                <div className={classes.title}>
                    {title}
                </div>
                <div className={classes.price}>
                    $ {price}
                </div>
                <div className={classes.category}>
                    {category}
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
