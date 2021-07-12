import { AxiosResponse } from 'axios'
import { put, call, takeLatest } from 'redux-saga/effects'
import { getProducts } from '../../api/shop'
import { GET_PRODUCTS, GET_PRODUCTS_FULFILLED, GET_PRODUCTS_PENDING, GET_PRODUCTS_REJECTED } from '../../features/products/productsSlice'

function* getProductsSaga() {
    try {
        yield put(GET_PRODUCTS_PENDING())
        const response: AxiosResponse = yield call(getProducts)
        yield put(GET_PRODUCTS_FULFILLED(response))
    } catch (err) {
        console.log(err)
        yield put(GET_PRODUCTS_REJECTED())
    }
}

export default function* productsWatecher() {
    yield takeLatest(GET_PRODUCTS, getProductsSaga)
}