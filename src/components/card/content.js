import { Button, Linker } from '../button'
import styled from 'styled-components'
import { device } from '../../devices'

const ContentComponent = styled.div`
  padding: 1em;
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
            Bienvenido a mi portafolio 😜
            <br />
            Soy un Desarrollador Frontend con residencia en Perú 🇵🇪
            <br />
            <ContentComponent highlight>
              Puedes hechar un vistazo a mis proyectos dando clic aquí
            </ContentComponent>
            o...
            <br />
            Puedes leer un poco acerca de mí 😮
          </>
        ) : about ? (
          <>
            Soy un estudiante de la carrera de Ingeniería de Software de UNMSM,
            Perú.
            <br />
            Actualmente estoy desempeñandome cono Desarrollador Frontend con
            React, pero tengo pensado llegar a ser FullStack.
            <br />
            Me divierto aprendiendo nuevas técnicas de desarrollo y technologías
            de vanguardia, de esta manera, procuro mejorar día a día con
            práctica constante 😇✅
            <br />
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
            Acerca de mí
          </Button>
        )}
        {about && (
          <Button route="/skills" as={Linker} secondary>
            Skills
          </Button>
        )}
        {!skills && !success && (
          <Button route="/work" as={Linker} primary>
            Proyectos
          </Button>
        )}
      </ContentComponent>
    </>
  )
}
