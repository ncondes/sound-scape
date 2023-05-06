import { configureStore } from '@reduxjs/toolkit'
import { modalSlice } from './slices/modal'
import { authSlice } from './slices/auth'

export const store = configureStore({
   reducer: {
      modal: modalSlice.reducer,
      auth: authSlice.reducer
   }
})
