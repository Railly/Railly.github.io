import React from 'react'
import styled, { css } from 'styled-components'
import { func, string } from 'prop-types'

const ToggleComponent = styled.button`
  width: 6em;
  cursor: pointer;
  background: ${({ theme }) => theme.switchBackground};
  border: 2px solid ${({ theme }) => theme.switchBackground};
  border-radius: 30px;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
`
const SpaceAroundContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 1.5em;
`

const Moon = styled.svg`
  fill: #fff;
  transition: 0.3s;
  ${({ theme }) =>
    theme.name === 'light' &&
    css`
      transform: translateX(-3em);
      opacity: 0;
    `};
`
const Sun = styled.svg`
  fill: #ffdf6e;
  transition: 0.3s;
  ${({ theme }) =>
    theme.name === 'dark' &&
    css`
      transform: translateX(3em);
      opacity: 0;
    `};
`

const Toggle = ({ toggleTheme }) => {
  return (
    <ToggleWrapper>
      <ToggleComponent>
        <SpaceAroundContainer onClick={toggleTheme}>
          <Sun
            width="22"
            height="22"
            viewBox="0 0 35 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17.5" cy="17.5" r="17.5" />
          </Sun>
          <Moon
            height="22"
            viewBox="-12 0 448 448.04455"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m224.023438 448.03125c85.714843.902344 164.011718-48.488281 200.117187-126.230469-22.722656 9.914063-47.332031 14.769531-72.117187 14.230469-97.15625-.109375-175.890626-78.84375-176-176 .972656-65.71875 37.234374-125.832031 94.910156-157.351562-15.554688-1.980469-31.230469-2.867188-46.910156-2.648438-123.714844 0-224.0000005 100.289062-224.0000005 224 0 123.714844 100.2851565 224 224.0000005 224zm0 0" />
          </Moon>
        </SpaceAroundContainer>
      </ToggleComponent>
    </ToggleWrapper>
  )
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle
