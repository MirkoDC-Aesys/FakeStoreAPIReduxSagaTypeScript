import axios from 'axios'

export const getProducts = () => axios('https://fakestoreapi.com/products')
export const getProduct = (id: string) => axios(`https://fakestoreapi.com/products/${id}`)