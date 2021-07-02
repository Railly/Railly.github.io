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
              <p>✔ Autodidácta 🤓</p>
              <p>✔ Iniciativa 🔨</p>
              <p>✔ Alta empatía 👌</p>
              <p>✔ Deseo de aprender 🧐</p>
              <p>✔ Comunicación 🙋‍♂️</p>
              <p>✔ Trabaje en equipo 🤜🤛</p>
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
                    ✔ Programación <br />
                    Funcional
                  </p>
                  <p>✔ Javascript ES6+</p>
                  <p>✔ HTML 5, CSS3 </p>
                  <p>✔ NPM & Yarn </p>
                </div>
                <div>
                  <p>✔ React JS (Esta página 😊)</p>
                  <p>✔ Next.js (Styled JSX)</p>
                  <p>✔ Styled Components</p>
                  <p>✔ Git: Control Version</p>
                  <p>✔ Figma</p>
                </div>
              </SkillsContainer>
            </Content>
            <Button route="/work" as={Linker} primary>
              Proyectos
            </Button>
          </ContentWrapper>
        </Card>
      </CenterContainer>
    </AboutContainer>
  )
}

export default Skills
