import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
   name: 'user',
   initialState: {
      isUserLoggedIn: false,
      message: null,
      status: 'not-authenticated' //cheking, not authenticated, authenticated
   },
   reducers: {
      register: (state) => {
         state.isUserLoggedIn = true
         state.message = 'Register successful'
         state.status = 'authenticated'
      },
      login: (state) => {
         state.isUserLoggedIn = true
         state.message = 'Login successful'
         state.status = 'authenticated'
      },
      logout: (state) => {
         state.isUserLoggedIn = false
         state.status = 'not-authenticated'
      },
      checkingCredentials: (state) => {
         state.message = 'Checking...'
         state.status = 'checking'
      },
      setMessage: (state, action) => {
         state.message = action.payload
      }
   }
})

export const { register, login, logout, checkingCredentials, setMessage } = authSlice.actions
