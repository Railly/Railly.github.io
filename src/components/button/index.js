import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../devices'

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => {
    if (props.primary) {
      return props.theme.primaryButtonBg
    }
    if (props.secondary) {
      return props.theme.secondaryButtonBg
    }
    if (props.contact) {
      return props.theme.contactButtonBg
    }
    if (props.disabled) {
      return props.theme.disabledBg
    }
  }};
  color: ${props => {
    if (props.primary) {
      return props.theme.primaryButtonFg
    }
    if (props.secondary) {
      return props.theme.secondaryButtonFg
    }
    if (props.contact) {
      return props.theme.contactButtonFg
    }
    if (props.disabled) {
      return props.theme.disabledFg
    }
  }};
  position: ${props => {
    if (props.contact) {
      return 'fixed'
    }
  }};
  bottom: ${props => {
    if (props.contact) {
      return '4em'
    }
  }};
  right: ${props => {
    if (props.contact) {
      return 0
    }
  }};
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 1em;
  margin-left: 1em;
  margin-right: 1em;
  padding: 0.5em 1em;
  border: 0px solid;
  cursor: pointer;
  border-radius: 0.5em;
  width: ${props => (props.contact ? '6.5em' : '9em')};
  box-shadow: ${props =>
    props.contact ? '1px 13px 30px 5px rgba(0, 0, 0, 0.2)' : 0};
  -webkit-box-shadow: ${props =>
    props.contact ? '1px 13px 30px 5px rgba(0, 0, 0, 0.2)' : 0};
  -moz-box-shadow: ${props =>
    props.contact ? '1px 13px 30px 5px rgba(0, 0, 0, 0.2)' : 0};

  @media ${device.laptopL} {
    width: ${props => (props.contact ? '10em' : '11em')};
    padding: 0.5em 1em;
    font-size: 1.1em;
  }
`
export const Linker = props => (
  <Link to={props.route}>
    <Button {...props} children={props.children} />
  </Link>
)

export const Anchor = props => (
  <a href={props.to} target="_blank">
    <Button {...props} children={props.children} />
  </a>
)
