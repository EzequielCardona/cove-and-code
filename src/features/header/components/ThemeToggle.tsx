import { Button } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { themeVariants } from '../../../themes/variants/themeVariants'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { themeVariationSelectors } from '../../../redux/themeVariation'
import { changeTheme } from '../../../redux/themeVariation/themeVariation.slice'

function ThemeToggle () {
  const theme = useAppSelector(themeVariationSelectors.theme)
  const dispatch = useAppDispatch()

  const handleChange = () => {
    const changeValue = (
      theme === themeVariants.dark
        ? themeVariants.light
        : themeVariants.dark
    )

    dispatch(changeTheme(changeValue))
  }

  return (
    <Button
      sx={(theme) => ({
        padding: '2rem',
        backgroundColor: theme.palette.background.default
      })}
      onClick={handleChange}
    >
      {theme === themeVariants.dark
        ? (
          <LightModeIcon htmlColor="white" />)
        : (
          <DarkModeIcon htmlColor="black" />)
      }
    </Button>
  )
}

export default ThemeToggle
