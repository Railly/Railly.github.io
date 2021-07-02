import React from 'react'
import styled from 'styled-components'
import darkGithub from '../../images/dark-github.svg'

import { Card, TitleWrapper, ContentWrapper, Title } from './'
import { Button, Anchor } from '../button'
import { device } from '../../devices'

const Img = styled.img`
  width: 100%;
  height: 100%;
`
const Icon = styled.img`
  width: 20%;
  height: 20%;
  margin-left: 0.5em;
`
const ButtonContainer = styled.div`
  display: flex;
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.tablet} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
  @media ${device.laptopL} {
    flex-direction: row;
  }
`

const Span = styled.span`
  line-height: 2em;
  margin: 2em 0;
`

export const WorkCard = ({ title, thumbnail, repo, demo, children }) => {
  const altText =
    title === 'Under Construction...'
      ? 'Foto de Fernando Arcos en Pexels'
      : `${title} screenshot`

  return (
    <>
      <Card work>
        <TitleWrapper>
          <Title content={title} />
        </TitleWrapper>
        <ContentWrapper>
          <Img src={thumbnail} alt={altText} />
          <Span>✔ {children}</Span>
          {title !== 'Under Construction...' ? (
            <ButtonContainer>
              <Button to={repo} as={Anchor} secondary>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <span>Code</span>
                  <Icon src={darkGithub} alt="github icon" />{' '}
                </div>
              </Button>
              <Button to={demo} as={Anchor} primary>
                <span>Live 🔴</span>
              </Button>
            </ButtonContainer>
          ) : (
            ''
          )}
        </ContentWrapper>
      </Card>
    </>
  )
}
