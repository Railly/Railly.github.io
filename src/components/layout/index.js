import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Toggle from './toggler'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../../hooks/useDarkMode'
import { GlobalStyles } from '../../themes/globalStyles'
import { lightTheme, darkTheme } from '../../themes/themes'

const Layout = ({ children }) => {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header theme={themeMode} />
        <main>
          <Toggle theme={theme} toggleTheme={themeToggler} />
          {children}
        </main>
      </>
      <Footer content="Made by @RaillyHugo" />
    </ThemeProvider>
  )
}

export default Layout
