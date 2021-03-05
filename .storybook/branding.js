import { create } from '@storybook/theming/create';
import Logo from './logo.svg'

export default create({
  base: 'light',

  colorPrimary: '#0f62fe',
  colorSecondary: '#393939',
/*
  // UI
  appBg: 'white',
  appContentBg: '#EDEDE4',
  appBorderColor: 'rgba(255,255,255,.8)',
  appBorderRadius: 0,
  */
  // Typography
  fontBase: '"IBM Plex Sans", "Open Sans", sans-serif',
  fontCode: '"IBM Plex Mono", monospace',
  /*
  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#5B5B53',
  barSelectedColor: '#2FC30E',
  barBg: '#EDEDE4',
 */
  // Form colors
  inputBg: '#f4f4f4',
  inputBorder: 'rgb(195, 195, 195)',
  inputTextColor: '#161616',
  inputBorderRadius: 0,

  brandTitle: 'Carbon Vue',
  brandUrl: 'https://gitlab.com/onekind/carbon-vue',
  brandImage: Logo
});
