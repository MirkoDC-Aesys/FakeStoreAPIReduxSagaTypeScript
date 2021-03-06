import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import productsReducer from '../features/products/productsSlice'
import productReducer from '../features/product/productSlice'
import cartReducer from '../features/cart/cartSlice'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
