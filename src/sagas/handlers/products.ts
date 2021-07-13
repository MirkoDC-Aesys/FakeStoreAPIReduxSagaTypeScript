import { AxiosResponse } from 'axios'
import { put, call, takeLatest } from 'redux-saga/effects'
import { getProduct, getProducts } from '../../api/shop'
import { GET_PRODUCT, GET_PRODUCT_FULFILLED, GET_PRODUCT_PENDING, GET_PRODUCT_REJECTED } from '../../features/product/productSlice'
import { GET_PRODUCTS, GET_PRODUCTS_FULFILLED, GET_PRODUCTS_PENDING, GET_PRODUCTS_REJECTED } from '../../features/products/productsSlice'

function* getProductsSaga() {
    try {
        yield put(GET_PRODUCTS_PENDING())
        const response: AxiosResponse = yield call(getProducts)
        yield put(GET_PRODUCTS_FULFILLED(response.data))
    } catch (err) {
        console.log(err)
        yield put(GET_PRODUCTS_REJECTED())
    }
}

function* getProductSaga({type, payload}: {type: string, payload: string}) {
    try {
        yield put(GET_PRODUCT_PENDING())
        const response: AxiosResponse = yield call(getProduct, payload)
        yield put(GET_PRODUCT_FULFILLED(response.data))
    } catch (err) {
        console.log(err)
        yield put(GET_PRODUCT_REJECTED())
    }
}

export default function* productsWatecher() {
    yield takeLatest(GET_PRODUCTS, getProductsSaga)
    yield takeLatest(GET_PRODUCT, getProductSaga)
}