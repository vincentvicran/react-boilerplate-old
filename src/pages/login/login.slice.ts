import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {loginService} from './login.service'

const login = createAsyncThunk(
  'login/login',
  async (data: {email: string; password: string}, thunkAPI) => {
    try {
      return await loginService.login(data)
    } catch (error) {
      thunkAPI.rejectWithValue('Cannot login!')
    }
  }
)

const initialState: {
  loading: boolean
  data?: Api.Session
  success: boolean
} = {
  loading: false,
  data: undefined,
  success: false
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.success = true
    })
    builder.addCase(login.rejected, (state) => {
      state.loading = false
    })
  }
})

export {login}
export default loginSlice.reducer
