import { getSearchKey } from '@/http/home'
import { IGetSearchKeyParams, IProducts } from '@/http/home/type'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface SearchState {
  searchProducts: IProducts[] | undefined
  searchTotal: number
}

const initialState: SearchState = {
  searchProducts: undefined,
  searchTotal: 0,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchKey.fulfilled, (state, action) => {
      state.searchProducts = action.payload.products
      state.searchTotal = action.payload.size
    })
  },
})

export const fetchSearchKey = createAsyncThunk(
  'fetchSearchKey',
  async ({ key, sort = '', limit, offset }: IGetSearchKeyParams) => {
    const response = await getSearchKey({ key, sort, limit, offset })
    return response
  },
)

export default searchSlice.reducer
