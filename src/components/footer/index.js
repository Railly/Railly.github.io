import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  width: 100%;
  bottom: 0em;
  font-size: 0.88em;
  position: fixed;
`

const FooterComponent = styled.div`
  display: flex;
  height: 3em;
  color: ${({ theme }) => theme.title};
  justify-content: center;
  align-items: center;
  background: rgb(73, 87, 95);
  background: linear-gradient(
    0deg,
    rgba(73, 87, 95, 1) 0%,
    rgba(106, 136, 140, 1) 100%
  );
`

const Footer = ({ content }) => {
  return (
    <FooterWrapper>
      <FooterComponent>{content}</FooterComponent>
    </FooterWrapper>
  )
}

export default Footer
