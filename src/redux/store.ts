import { configureStore } from '@reduxjs/toolkit'
import { themeVariationStoreKey } from './themeVariation/themeVariation.const'
import { themeVariationSlice } from './themeVariation/themeVariation.slice'

export const store = configureStore({
  reducer: {
    [themeVariationStoreKey]: themeVariationSlice.reducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
