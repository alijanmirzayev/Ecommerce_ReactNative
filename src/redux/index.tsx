import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './Slice/UserSlice'
import ProductDetailSlice from './Slice/ProductDetailSlice'
import CategorySlice from './Slice/CategorySlice'
import ProductSlice from './Slice/ProductSlice'

export const store = configureStore({
    reducer: {
        users: UserSlice,
        productDetail: ProductDetailSlice,
        categories: CategorySlice,
        products: ProductSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>