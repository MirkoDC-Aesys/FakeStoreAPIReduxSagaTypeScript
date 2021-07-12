import axios from 'axios'

export const getProducts = () => axios('https://fakestoreapi.com/products')