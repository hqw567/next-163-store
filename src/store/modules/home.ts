import {
  getAllProduct,
  getHomeBanner,
  getHotProduct,
  getSearchSuggest,
} from '@/http'
import type {
  IAllProductRoot,
  IHomeBanner,
  ISearchsuggest,
} from '@/http/home/type'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IHotProductRoot } from './../../http/home/type'

export interface HomeState {
  searchsuggest: ISearchsuggest | null
  banners: IHomeBanner[]
  hotProducts: IHotProductRoot | null
  allProducts: IAllProductRoot | null
}

const initialState: HomeState = {
  searchsuggest: null,
  banners: [],
  hotProducts: null,
  allProducts: null,
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchSuggest.fulfilled, (state, action) => {
        state.searchsuggest = action.payload
      })
      .addCase(fetchHomeBanner.fulfilled, (state, action) => {
        state.banners = action.payload
      })
      .addCase(fetchHotProduct.fulfilled, (state, action) => {
        state.hotProducts = action.payload
      })
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.allProducts = action.payload
      })
  },
})

export const fetchSearchSuggest = createAsyncThunk(
  'fetchSearchSuggest',
  async () => {
    const response = await getSearchSuggest()
    return response.data
  },
)
export const fetchHomeBanner = createAsyncThunk('fetchHomeBanner', async () => {
  const response = await getHomeBanner()
  return response.banners
})
export const fetchHotProduct = createAsyncThunk('fetchHotProduct', async () => {
  const response = await getHotProduct()
  return response.data
})
export const fetchAllProduct = createAsyncThunk(
  'fetchGetAllProduct',
  async () => {
    const response = await getAllProduct()
    return response.data
  },
)

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = homeSlice.actions

export default homeSlice.reducer
