import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { themeVariants } from '../../themes/variants/themeVariants'
import { themeVariationStoreKey } from './themeVariation.const'

// Define a type for the slice state
interface IThemeState {
  currentTheme: themeVariants
}

// Define the initial state using that type
const initialState: IThemeState = {
  currentTheme: themeVariants.dark
}

export const themeVariationSlice = createSlice({
  name: themeVariationStoreKey,
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<themeVariants>) => {
      state.currentTheme = action.payload
    }
  }
})

export const { changeTheme } = themeVariationSlice.actions
