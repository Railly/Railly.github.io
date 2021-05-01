import styled from 'styled-components'
import { device } from '../../devices'

const CharacterComponent = styled.img`
  display: none;

  @media ${device.tablet} {
    display: flex;
    height: 85%;
    width: 85%;
  }

  @media ${device.laptop} {
    display: flex;
    height: 85%;
    width: 85%;
  }

  @media ${device.laptopL} {
    display: flex;
    height: 90%;
    width: 90%;
  }
`

export const CharContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    position: absolute;
    z-index: -1;
    top: 7.5%;
  }

  @media ${device.laptop} {
    position: relative;
    justify-content: space-evenly;
    z-index: 0;
  }

  @media ${device.laptopL} {
    position: relative;
    z-index: 0;
    justify-content: space-evenly;
  }
`

export const Character = ({ image, description }) => (
  <CharacterComponent src={image} alt={description} />
)
