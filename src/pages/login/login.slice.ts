import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {setCookie} from 'src/helpers'

import {loginService} from './login.service'

const login = createAsyncThunk(
  'login/login',
  async (data: {email: string; password: string}, thunkAPI) => {
    try {
      const response = await loginService.login(data)
      if (response.token) {
        setCookie('@token', response.token)
      }
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue('Cannot Login!')
    }
  }
)

const authenticateUser = createAsyncThunk(
  'login/users',
  async (_, thunkAPI) => {
    try {
      return await loginService.authenticateUser()
    } catch (error) {
      return thunkAPI.rejectWithValue('Cannot Authenticate!')
    }
  }
)

const initialState: {
  authLoading: boolean
  loading: boolean
  data?: Api.Session
  success: boolean
} = {
  authLoading: true,
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
      state.authLoading = false
      state.loading = false
      state.data = action.payload
      state.success = true
    })
    builder.addCase(login.rejected, (state, action) => {
      state.authLoading = false
      state.loading = false
    })
    builder.addCase(authenticateUser.fulfilled, (state) => {
      state.authLoading = false
      state.success = true
    })
    builder.addCase(authenticateUser.rejected, (state) => {
      state.authLoading = false
      state.success = false
    })
  }
})

export {login, authenticateUser}
export default loginSlice.reducer
