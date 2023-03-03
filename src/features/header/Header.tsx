import { Box } from '@mui/material'
import ThemeToggle from './components/ThemeToggle'

function Header () {
  return (
    <header>
      <Box
        sx={(theme) => ({
          height: '5rem',
          width: '100vw',
          backgroundColor: theme.palette.primary.light,
          display: 'flex',
          justifyContent: 'end'
        })}
      >
        <ThemeToggle />
      </Box>
    </header>
  )
}

export default Header
