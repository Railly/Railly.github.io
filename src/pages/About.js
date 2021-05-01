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

import characterAbout from '../images/character-about.svg'

const About = () => {
  return (
    <CenterContainer>
      <CharContainer>
        <Character
          image={characterAbout}
          description="Front-facing character programming on his computer."
        />
      </CharContainer>
      <Card>
        <TitleWrapper>
          <Title content="About" />
        </TitleWrapper>
        <ContentWrapper>
          <Content about />
        </ContentWrapper>
      </Card>
    </CenterContainer>
  )
}

export default About
