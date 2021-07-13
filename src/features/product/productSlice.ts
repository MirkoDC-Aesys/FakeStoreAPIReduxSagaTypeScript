import { createSlice } from '@reduxjs/toolkit'

export interface Product {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

export interface ProductState {
    product: Product | null,
    status: 'idle' | 'loading' | 'failed'
}

const initialState: ProductState = {
    product: null,
    status: 'idle'
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        GET_PRODUCT: (state, { type, payload }) => { },
        GET_PRODUCT_PENDING: (state) => {
            state.status = 'loading'
        },
        GET_PRODUCT_FULFILLED: (state, { payload }) => {
            state.product = payload
            state.status = 'idle'
        },
        GET_PRODUCT_REJECTED: (state) => {
            state.status = 'failed'
        },
        DELETE_PRODUCT: (state) => {
            state.product = null
        }
    },
})

export const { GET_PRODUCT, GET_PRODUCT_PENDING, GET_PRODUCT_FULFILLED, GET_PRODUCT_REJECTED, DELETE_PRODUCT } = productSlice.actions
export default productSlice.reducer

