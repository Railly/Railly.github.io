import styled from 'styled-components'
import { device } from '../../devices'

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

 @media ${device.mobileS} {
    justify-content: center;
    flex-direction: ${props => (props.work ? 'column' : 'row')};
  }

  @media ${device.tablet} {
    justify-content: center;
    flex-direction: ${props => (props.work ? 'column' : 'row')};
  }
  @media ${device.laptop} {
    justify-content: ${props => (props.contact ? 'center' : 'space-evenly')};
    flex-direction: ${props => (props.work ? 'column' : 'row')};
  }

  @media ${device.laptopL} {
    justify-content: ${props => (props.contact ? 'center' : 'space-evenly')};
    flex-direction: row;
`

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: space-evenly;

  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.laptopL} {
    flex-direction: row;
  }
`

export const WorkContainer = styled.div`
  display: grid;
  justify-items: center;
  gap: 1em;

  @media ${device.mobileS} {
    grid-template-columns: 100%;
  }
  @media ${device.tablet} {
    grid-template-columns: 100%;
  }

  @media ${device.laptop} {
    grid-template-columns: 100%;
  }

  @media ${device.laptopL} {
    grid-template-columns: 50% 50%;
  }
`

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: space-evenly;
`
