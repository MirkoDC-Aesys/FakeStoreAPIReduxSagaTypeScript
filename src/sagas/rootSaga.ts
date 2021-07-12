import { all } from 'redux-saga/effects'
import productsWatecher from "./handlers/products"

export default function* rootSaga() {
    yield all([
        productsWatecher(),
    ])
}