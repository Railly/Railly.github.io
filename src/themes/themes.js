export const cream = '#FFFFFF'
export const darkGrey = '#49575F'
const mediumGrey = '#5F7174'
const lightGrey = '#6A888C'
const green = '#C0FB7D'
const darkBlue = '#00A6C0'
const lightBlue = '#32D9CB'
const white = '#FFF'
const disabledGreen = '#BCCEA8'
const disabledDarkGrey = '#707477'
const transparency = '44'
const shadowTransparency = '22'

const globalTheme = {
  braces: green,
  primaryButtonBg: green,
  primaryButtonFg: darkGrey,
  secondaryButtonBg: mediumGrey,
  disabledFg: disabledDarkGrey,
  disabledBg: disabledGreen,
}

export const lightTheme = {
  name: 'light',
  header: `${cream}${transparency}`,
  shadow: `#000000${transparency}`,
  body: cream,
  text: mediumGrey,
  title: cream,
  backgroundTitle: lightGrey,
  highlight: darkBlue,
  backgroundContent: cream,
  braces: globalTheme.braces,
  switchBackground: lightGrey,
  primaryButtonBg: globalTheme.primaryButtonBg,
  primaryButtonFg: globalTheme.primaryButtonFg,
  contactButtonBg: darkBlue,
  contactButtonFg: cream,
  disabledFg: globalTheme.disabledFg,
  disabledBg: globalTheme.disabledBg,
  secondaryButtonBg: globalTheme.secondaryButtonBg,
  secondaryButtonFg: cream,
  description: darkGrey,
  hover: darkBlue,
}

export const darkTheme = {
  name: 'dark',
  header: `${darkGrey}${transparency}`,
  shadow: `${cream}${shadowTransparency}`,
  body: darkGrey,
  text: white,
  title: white,
  backgroundTitle: mediumGrey,
  highlight: lightBlue,
  backgroundContent: lightGrey,
  braces: globalTheme.braces,
  switchBackground: lightBlue,
  primaryButtonBg: globalTheme.primaryButtonBg,
  primaryButtonFg: globalTheme.primaryButtonFg,
  contactButtonBg: lightBlue,
  contactButtonFg: white,
  disabledFg: globalTheme.disabledFg,
  disabledBg: globalTheme.disabledBg,
  secondaryButtonBg: globalTheme.secondaryButtonBg,
  secondaryButtonFg: white,
  description: white,
  hover: green,
}
