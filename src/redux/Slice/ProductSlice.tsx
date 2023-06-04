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
    data: null | Array<productDetail>,
    status: null | 'pending' | 'rejected' | 'fulfilled',
    error: any
}

export const getAllProductByCategoryId = createAsyncThunk('posts/getAllProductByCategoryId', async (categoryId: string, { rejectWithValue }) => {
    try {
        const response = await instance.get(`/api/product/${categoryId}`)
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

const productSlice = createSlice({
    name: 'Product',
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProductByCategoryId.pending, (state) => {
            state.status = 'pending'
        }).addCase(getAllProductByCategoryId.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'fulfilled'
        }).addCase(getAllProductByCategoryId.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
    }
})

export default productSlice.reducer

export const { } = productSlice.actions