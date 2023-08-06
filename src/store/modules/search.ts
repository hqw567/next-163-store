import { getSearchKey } from '@/http'
import { IProducts } from '@/http/home/type'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface SearchState {
  searchKeys: IProducts[] | undefined
}

const initialState: SearchState = {
  searchKeys: undefined,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchKey.fulfilled, (state, action) => {
      console.log('🚀 ~ file: search.ts:19 ~ builder.addCase ~ action:', action)
      state.searchKeys = action.payload
    })
  },
})

export const fetchSearchKey = createAsyncThunk(
  'fetchSearchKey',
  async (q: string) => {
    console.log('q :>> ', q)
    const response = await getSearchKey({ q })
    console.log('🚀 ~ file: search.ts:29 ~ response:', response)
    return response.products
  },
)

export default searchSlice.reducer
