import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkRouter = ({ className, route, onClick, children }) => (
  <Link className={className} to={route} onClick={onClick}>
    {children}
  </Link>
)

const StyledLink = styled(LinkRouter)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: medium;
  padding-top: 1em;
  padding-bottom: 1em;
  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`
export default StyledLink
