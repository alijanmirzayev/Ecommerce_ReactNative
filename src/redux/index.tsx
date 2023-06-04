import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './Slice/UserSlice'
import ProductDetailSlice from './Slice/ProductDetailSlice'

export const store = configureStore({
    reducer: {
        users: UserSlice,
        productDetail: ProductDetailSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>