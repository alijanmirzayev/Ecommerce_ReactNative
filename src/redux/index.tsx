import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './Slice/UserSlice'

export const store = configureStore({
    reducer: {
        users: UserSlice,
    }
})

export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>