import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../network/AxiosInstance';

interface category {
    id: string,
    name: string,
}

interface initalState {
    data: null | category,
    status: null | 'pending' | 'rejected' | 'fulfilled',
    error: any
}

export const getAll = createAsyncThunk('category/getAll', async (data, { rejectWithValue }) => {
    try {
        const response = await instance.get(`/api/category/`)
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

const categorySlice = createSlice({
    name: 'CategoryDetail',
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAll.pending, (state) => {
            state.status = 'pending'
        }).addCase(getAll.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'fulfilled'
        }).addCase(getAll.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
    }
})

export default categorySlice.reducer

export const { } = categorySlice.actions