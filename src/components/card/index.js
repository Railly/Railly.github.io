import styled from 'styled-components'
import { device } from '../../devices'

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  width: 35em;
  margin: 2em;
  box-shadow: 1px 13px 30px 5px ${({ theme }) => theme.shadow};
  -webkit-box-shadow: 1px 13px 30px 5px ${({ theme }) => theme.shadow};
  -moz-box-shadow: 1px 13px 30px 5px ${({ theme }) => theme.shadow};

  @media ${device.mobileS} {
    position: relative;
    max-width: ${props => {
      if (props.work) {
        return '70vw'
      }
    }};
  }

  @media ${device.tablet} {
    position: relative;
    margin-top: ${props => {
      if (props.skills) {
        return '2em'
      }
      if (props.work) {
        return '2em'
      }
      if (props.contact) {
        return '2em'
      }
      return '6em'
    }};
    min-width: 70vw;
  }
  @media ${device.laptop} {
    position: relative;
    margin-top: 2em;
    min-width: 90%;
  }

  @media ${device.laptopL} {
    position: relative;
    margin-top: 2em;
    min-width: ${props => {
      if (props.skills) {
        return '5em'
      }
      if (props.work) {
        return '70vw'
      }
      return '50em'
    }};
  }
`
export const TitleWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.backgroundTitle};
  @media ${device.laptop} {
    height: 5em;
  }
  @media ${device.laptopL} {
    height: 7em;
  }
`
export const ContentWrapper = styled.section`
  display: flex;
  //widht: 50em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${({ theme }) => theme.backgroundContent};
  line-height: 120%;
`
export { Title } from './title'
export { Content } from './content'
export { WorkCard } from './workcard'
