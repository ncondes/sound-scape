import { createSelector } from '@reduxjs/toolkit'

export const selectAuthMessage = createSelector(
   (state) => state.auth,
   (auth) => auth.message
)
