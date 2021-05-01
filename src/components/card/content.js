import { Button, Linker } from '../button'
import styled from 'styled-components'
import { device } from '../../devices'

const ContentComponent = styled.div`
  padding-left: 1em;
  padding-right: 1em;
  color: ${props => {
    if (props.highlight) {
      return ({ theme }) => theme.highlight
    }
    if (props.description) {
      return ({ theme }) => theme.description
    }
  }};
  text-decoration: ${props => {
    if (props.highlight) {
      return 'underline'
    }
    return 'none'
  }};
  font-weight: ${props => {
    if (props.highlight) {
      return 'bold'
    }
    return 'normal'
  }};

  font-size: ${props => {
    if (props.highlight) {
      return '0.88em'
    }
    if (props.description) {
      return '0.88em'
    }
  }};
  @media ${device.laptop} {
    font-size: ${props => {
      if (props.highlight) {
        return '1em'
      }
      if (props.description) {
        return '1em'
      }
    }};
    line-height: 2em;
  }
  @media ${device.laptopL} {
    font-size: ${props => {
      if (props.highlight) {
        return '1em'
      }
      if (props.description) {
        return '1em'
      }
    }};
    line-height: 2em;
  }
`

export const Content = ({ home, about, skills, success, children }) => {
  return (
    <>
      <ContentComponent description>
        {home ? (
          <>
            Hi, Software Engineer here! I really enjoy creating solutions👨‍💻.
            <br />
            <ContentComponent highlight>
              Take a look at my work!
            </ContentComponent>
            or...
            <br />
            Read a little bit about me.
          </>
        ) : about ? (
          <>
            Hi there 😁, I’m an enthusiastic Software Engineer
            <br /> and Frontend Developer from Peru 🇵🇪. <br />
            Because the technology industry is a highly changing environment 🧐,{' '}
            <br />I enjoy learning new technologies by myself since 2019 😍👌.
          </>
        ) : success ? (
          <ContentComponent description>
            I will answer your email shortly.
            <br />
            <br />
            You can check my social media 😇
            <br />
            <br />
          </ContentComponent>
        ) : (
          <>{children}</>
        )}
      </ContentComponent>
      <br />
      <ContentComponent>
        {home && (
          <Button route="/about" as={Linker} secondary>
            About
          </Button>
        )}
        {about && (
          <Button route="/skills" as={Linker} secondary>
            My Skills
          </Button>
        )}
        {!skills && !success && (
          <Button route="/work" as={Linker} primary>
            My Work
          </Button>
        )}
      </ContentComponent>
    </>
  )
}
