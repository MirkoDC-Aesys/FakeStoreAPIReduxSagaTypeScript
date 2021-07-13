import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../product/productSlice'

export interface cartItem extends Product {
    amount: number
}

export interface cartState {
    products: cartItem[]
}

const initialState: cartState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        ADD_PRODUCT: (state, { payload }) => {
            state.products.find(prod => prod.id === payload.id) ?
                state.products.map(prod => prod.id === payload.id ? prod.amount += 1 : prod)
                :
                state.products.push({...payload, amount: 1})
        },
        REMOVE_ONE_PRODUCT: (state, { payload }) => {
            state.products.map(prod => prod.id === payload ? prod.amount > 1 ? prod.amount -= 1 : prod : prod)
        },
        REMOVE_ALL_PRODUCTS: (state, { payload }) => {
            state.products.splice(payload, 1)
        }
    },
})

export const { ADD_PRODUCT, REMOVE_ONE_PRODUCT, REMOVE_ALL_PRODUCTS } = cartSlice.actions
export default cartSlice.reducer

