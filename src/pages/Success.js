import React from 'react'

import { Button, Anchor } from '../components/button'
import { Character, CharContainer } from '../components/character/'
import { CenterContainer } from '../components/container'
import {
  Card,
  TitleWrapper,
  Title,
  ContentWrapper,
  Content,
} from '../components/card'

import CharacterAbout from '../images/character-about.svg'

const Success = () => {
  return (
    <CenterContainer>
      <Card>
        <TitleWrapper>
          <Title content="Thank you" />
        </TitleWrapper>
        <ContentWrapper>
          <Content success />
          <Button to="https://twitter.com/RaillyHugo" as={Anchor} primary>
            Twitter
          </Button>
          <Button to="https://github.com/Railly" as={Anchor} secondary>
            Github
          </Button>
        </ContentWrapper>
      </Card>
      <CharContainer>
        <Character
          image={CharacterAbout}
          description="Front-facing character programming on his computer"
        />
      </CharContainer>
    </CenterContainer>
  )
}

export default Success
