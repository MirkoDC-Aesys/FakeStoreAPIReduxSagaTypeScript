import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import productsReducer from '../features/products/productsSlice'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
