import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import productsReducer from '../features/products/productsSlice'

export const store = configureStore({
  reducer: {
    counter: productsReducer,
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
