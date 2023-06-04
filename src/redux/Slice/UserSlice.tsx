import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../network/AxiosInstance';

interface address {
    country: String,
    city: String,
    state: String,
    street: String
}

interface data {
    _id: string,
    fullname: string,
    profilePhoto: string,
    address: address
}

interface initalState {
    data: data | null,
    status: null | 'pending' | 'rejected' | 'fulfilled',
    error: any
}

export const getById = createAsyncThunk('users/getById', async (data, { rejectWithValue }) => {
    try {
        const response = await instance.get(`/api/user/647c6bca2b23ba151ca5934f`)
        return response.data
    } catch (error) {
        return rejectWithValue('Error! Please re-check again')
    }
})

const initalState: initalState = {
    data: null,
    status: null,
    error: null
}

const userSlice = createSlice({
    name: 'User',
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getById.pending, (state) => {
            state.status = 'pending'
        }).addCase(getById.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'fulfilled'
        }).addCase(getById.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
    }
})

export default userSlice.reducer

export const { } = userSlice.actions