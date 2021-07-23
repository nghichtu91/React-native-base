export const SOCIAL = {
  FACEBOOK: '#3B5998',
  TWITTER: '#5BC0DE',
  DRIBBBLE: '#EA4C89',
};

export const THEME = {
  THEME: '#FE2472',
  PRIMARY: '#EF873D',
  DARK_PRIMARY: '#F4075C',
  LIGHT_PRIMARY: '#FF8AB9',
  BRIGHT_PRIMARY: '#FFD1E4',

  INFO: '#2B67F6',
  DARK_INFO: '#0520D0',
  LIGHT_INFO: '#8794FF',
  BRIGHT_INFO: '#D1D6FF',

  DANGER: '#FF3F31',
  DARK_DANGER: '#F43324',
  LIGHT_DANGER: '#FF7167',
  BRIGHT_DANGER: '#FFCAC6',

  WARNING: '#FF9C09',
  DARK_WARNING: '#EE8E00',
  LIGHT_WARNING: '#FFCC76',
  BRIGHT_WARNING: '#FFEBCB',

  SUCCESS: '#18CE0F',
  DARK_SUCCESS: '#24AD12',
  LIGHT_SUCCESS: '#88F38E',
  BRIGHT_SUCCESS: '#D2FBD3',
  WHITE: '#FFFFFF',

  DARK_BLACK: '#000B19',
  BLACK: '#393938',
  BRIGHT_BLACK: '#3D4144',
  LIGHT_BLACK: '#2A2F36',

  DARK_SECONDARY: '#62676B',
  SECONDARY: '#9FA5AA',
  BRIGHT_SECONDARY: '#EEF1F3',
  LIGHT_SECONDARY: '#D6DADD',

  DARK_GREY: '#E0E4EA',
  GREY: '#E9EBEF',
  BRIGHT_GREY: '#F7F8F9',
  LIGHT_GREY: '#F0F1F4',
  NEUTRAL: 'rgba(255,255,255, 0.65)',
};

export const COMPONENTS = {
  INPUT: '#808080',
  PLACEHOLDER: '#9FA5AA',
  NAVBAR: '#F9F9F9',
  BLOCK: '#808080',
  ICON: '#EF873D',
};

const COLORS = {
  MUTED: '#9FA5AA',
  TRANSPARENT: 'transparent',
  ...COMPONENTS,
  ...THEME,
  ...SOCIAL,
};

export default COLORS;
