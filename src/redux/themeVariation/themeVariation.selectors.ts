import { type RootState } from '../store'

const theme = (state: RootState) => state.themeVariation.currentTheme

export const themeVariationSelectors = { theme }
