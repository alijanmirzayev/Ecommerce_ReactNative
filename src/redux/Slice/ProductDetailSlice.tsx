import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../network/AxiosInstance';

interface productDetail {
    id: string,
    categoryId: string,
    image: string,
    brand: string,
    model: string,
    description: string,
    price: number,
    stock: number,
    colors: Array<string>
}

interface initalState {
    data: null | productDetail,
    status: null | 'pending' | 'rejected' | 'fulfilled',
    error: any
}

export const getById = createAsyncThunk('postDetail/getById', async (id: string, { rejectWithValue }) => {
    try {
        console.log(id)
        const response = await instance.get(`/api/product/detail/${id}`)
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

const productDetailSlice = createSlice({
    name: 'ProductDetail',
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

export default productDetailSlice.reducer

export const { } = productDetailSlice.actions