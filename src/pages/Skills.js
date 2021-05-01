import React from 'react'

import { Button, Linker } from '../components/button'
import {
  AboutContainer,
  SkillsContainer,
  CenterContainer,
} from '../components/container'
import {
  Card,
  TitleWrapper,
  Title,
  ContentWrapper,
  Content,
} from '../components/card'

const Skills = () => {
  return (
    <AboutContainer>
      <CenterContainer>
        <Card skills>
          <TitleWrapper>
            <Title content="Soft Skills" />
          </TitleWrapper>
          <ContentWrapper>
            <Content skills>
              <p>✔ Self-learning 🤓</p>
              <p>✔ Troubleshooting 🔨</p>
              <p>✔ High empathy 👌</p>
              <p>✔ Desire to learn 🧐</p>
              <p>✔ Communication 🙋‍♂️</p>
              <p>✔ Teamwork 🤜🤛</p>
            </Content>
          </ContentWrapper>
        </Card>
      </CenterContainer>
      <CenterContainer>
        <Card skills>
          <TitleWrapper>
            <Title content="Technical Skills" />
          </TitleWrapper>
          <ContentWrapper>
            <Content skills>
              <SkillsContainer>
                <div style={{ marginRight: '1.5em' }}>
                  <p>
                    ✔ Functional <br />
                    Programming
                  </p>
                  <p>✔ Javascript ES6+</p>
                  <p>✔ HTML 5, CSS3 </p>
                  <p>✔ NPM & Yarn </p>
                </div>
                <div>
                  <p>✔ React JS (This page 😊)</p>
                  <p>✔ React Native with Expo</p>
                  <p>✔ Styled Components</p>
                  <p>✔ Git: Control Version</p>
                </div>
              </SkillsContainer>
            </Content>
            <Button route="/work" as={Linker} primary>
              My Work
            </Button>
          </ContentWrapper>
        </Card>
      </CenterContainer>
    </AboutContainer>
  )
}

export default Skills
