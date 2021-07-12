import { createSlice } from '@reduxjs/toolkit'

interface ProductState {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

interface ProductsState {
    products: ProductState[],
    status: 'idle' | 'loading' | 'failed'
}

const initialState: ProductsState = {
    products: [],
    status: 'idle'
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        GET_PRODUCTS: () => { },
        GET_PRODUCTS_PENDING: (state) => {
            state.status = 'loading'
        },
        GET_PRODUCTS_FULFILLED: (state, { payload }) => {
            state.products = payload
            state.status = 'idle'
        },
        GET_PRODUCTS_REJECTED: (state) => {
            state.status = 'failed'
        }
    },
})

export const { GET_PRODUCTS, GET_PRODUCTS_PENDING, GET_PRODUCTS_FULFILLED, GET_PRODUCTS_REJECTED } = productsSlice.actions
export default productsSlice.reducer

