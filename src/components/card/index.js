import styled from 'styled-components'
import { device } from '../../devices'

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  width: 35em;
  margin: 2em;
  box-shadow: 1px 13px 30px 5px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 1px 13px 30px 5px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 1px 13px 30px 5px rgba(0, 0, 0, 0.2);

@media ${device.mobileS} {
    position: relative;
    max-width: ${props => {
      if (props.work) {
        return '20em'
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
    min-width: 35em;
  }
  @media ${device.laptop} {
    position: relative;
    margin-top: 2em;
    min-width: 40em;
  }

  @media ${device.laptopL} {
    position: relative;
    margin-top: 2em;
    min-width: ${props => {
      if (props.skills) {
        return '5em'
      }
      if (props.work) {
        return '40em'
      }
      return '50em'
    }}
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
  widht: 50em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em 1em;
  text-align: center;
  background: ${({ theme }) => theme.backgroundContent};
  line-height: 120%;
`
export { Title } from './title'
export { Content } from './content'
export { WorkCard } from './workcard'
