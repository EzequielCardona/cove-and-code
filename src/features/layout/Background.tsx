import { Box, createTheme, ThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { themeVariationSelectors } from '../../redux/themeVariation'
import buildAppTheme from '../../themes/buildAppTheme'

interface IProps {
  children: React.ReactElement
}

/**
 * Sets the background of the entire app
 * and the theme wrapper is set here
 * @param param0 children: React.ReactElement
 * @returns React.ReactElement
 */
function Background ({ children }: IProps) {
  const themeSelected = useAppSelector(themeVariationSelectors.theme)

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(buildAppTheme(themeSelected)), [themeSelected])

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.background.default,
          width: '100vw',
          height: '100vh'
        })}
      >
        {children}
      </Box>
    </ThemeProvider>
  )
}

export default Background
