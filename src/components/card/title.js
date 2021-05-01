import styled from 'styled-components'
import { device } from '../../devices'

const CustomTitle = styled.p`
  text-align: center;
  padding-left: 1.5em;
  padding-right: 1.5em;
  font-size: 1.4em;
  font-weight: bold;
  color: ${({ theme }) => theme.title};
  @media ${device.laptop} {
    font-size: 1.5em;
  }
  @media ${device.laptopL} {
    font-size: ${props => {
      if (props.highlight) {
        return '1.1em'
      }
      if (props.description) {
        return '1.1em'
      }
    }};
    line-height: 2em;
    margin-bottom: 1em;
  }
`
const Brace = styled.span`
  color: ${({ theme }) => theme.braces};
`

export const Title = ({ content }) => (
  <CustomTitle>
    <Brace>{'<'}</Brace>
    {content}
    <Brace>{' />'}</Brace>
  </CustomTitle>
)
