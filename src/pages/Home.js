import React from 'react'

import { Character, CharContainer } from '../components/character/'
import { CenterContainer } from '../components/container'
import {
  Card,
  TitleWrapper,
  Title,
  ContentWrapper,
  Content,
} from '../components/card'

import characterHome from '../images/character-home.svg'

const Home = () => {
  return (
    <CenterContainer>
      <Card>
        <TitleWrapper>
          <Title content="Railly Hugo" />
        </TitleWrapper>
        <ContentWrapper>
          <Content home />
        </ContentWrapper>
      </Card>
      <CharContainer>
        <Character
          image={characterHome}
          description="Sideways character programming on his computer"
        />
      </CharContainer>
    </CenterContainer>
  )
}

export default Home
