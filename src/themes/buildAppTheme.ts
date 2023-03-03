import { darkTheme } from './variants/darkTheme'
import { lightTheme } from './variants/lightTheme'
import { themeVariants } from './variants/themeVariants'

const buildAppTheme = (variant: themeVariants) => ({
  palette: {
    primary: {
      main: 'rgba(132, 210, 197, 1)',
      lighter: 'rgba(132, 210, 197, 1)',
      light: 'rgba(228, 201, 136, 1)',
      dark: 'rgba(194, 118, 100, 1)',
      darker: 'rgba(176, 90, 122, 1)'
    },
    ...(variant === themeVariants.light
      ? lightTheme
      : darkTheme
    )
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0'
        }
      }
    }
  }
})

export default buildAppTheme
