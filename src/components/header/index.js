import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { bubble as Menu } from 'react-burger-menu'

import StyledLink from '../styled-link'
import lightBurguer from '../../themes/lightBurguer'
import darkBurguer from '../../themes/darkBurguer'

import lightLogo from '../../images/light-logo.svg'
import darkLogo from '../../images/dark-logo.svg'
import lightGithub from '../../images/light-github.svg'
import darkGithub from '../../images/dark-github.svg'
import lightTwitter from '../../images/light-twitter.svg'
import darkTwitter from '../../images/dark-twitter.svg'

const LogoContainer = styled.div`
  padding: 1em 2em 0;
`

const Logo = styled.img`
  height: 3em;
  width: 7em;
`
const Header = ({ theme }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const handleStateChange = state => {
    setMenuOpen(state.isOpen)
  }

  return (
    <header id="header">
      <Menu
        pageWrapId={'logo'}
        outerContainerId={'header'}
        isOpen={menuOpen}
        onStateChange={state => {
          handleStateChange(state)
        }}
        styles={theme.name === 'light' ? lightBurguer : darkBurguer}
        right
      >
        <StyledLink route="/" onClick={() => closeMenu()}>
          <div>{'{ Home }'}</div>
        </StyledLink>
        <StyledLink route="/about" onClick={() => closeMenu()}>
          <div>{'{ About }'}</div>
        </StyledLink>
        <StyledLink route="/skills" onClick={() => closeMenu()}>
          <div>{'{ Skills }'}</div>
        </StyledLink>
        <StyledLink route="/work" onClick={() => closeMenu()}>
          <div>{'{ Work }'}</div>
        </StyledLink>
        <StyledLink route="/contact" onClick={() => closeMenu()}>
          <div>{'{ Contact }'}</div>
        </StyledLink>
        <a href="https://twitter.com/RaillyHugo">
          <img
            src={theme.name === 'light' ? lightTwitter : darkTwitter}
            alt="Logo"
          />
        </a>
        <a href="https://github.com/Railly">
          <img
            src={theme.name === 'light' ? lightGithub : darkGithub}
            alt="Logo"
          />
        </a>
      </Menu>
      <LogoContainer id="logo">
        <Link to="/">
          <Logo
            src={theme.name === 'light' ? lightLogo : darkLogo}
            alt="Logo"
          />
        </Link>
      </LogoContainer>
    </header>
  )
}

export default Header
