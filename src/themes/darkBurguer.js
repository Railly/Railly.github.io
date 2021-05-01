import { darkGrey } from './themes'

const darkBurguer = {
  bmBurgerButton: {
    position: 'absolute',
    width: '1.5em',
    height: '1.5em',
    right: '1.8em',
    top: '1.8em',
  },
  bmBurgerBars: {
    background: '#fff',
  },
  bmBurgerBarsHover: {
    background: '#00a6c0',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: darkGrey,
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: darkGrey,
  },
  bmItemList: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingLeft: '3.5em',
  },
  bmItem: {
    display: 'flex',
    paddingTop: '1em',
    paddingBottom: '1em',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}

export default darkBurguer
