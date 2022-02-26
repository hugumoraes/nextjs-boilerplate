import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  name: 'default',
  theme: {
    dark: {
      background: '#000000',
    },
    light: {
      background: '#ffffff',
    },
  },
  screenSizes: {
    mobileSm: '320px',
    mobile: '480px',
    tablet: '720px',
    desktopXs: '1024px',
    desktopSm: '1280px',
    desktopMd: '1360px',
    desktopLg: '1440px',
    desktopXl: '1920px',
    desktop2k: '2160px',
    desktop4k: '3840px',
  },
};
