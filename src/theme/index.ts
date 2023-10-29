'use client';

import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#666CFF',
      light: '#787EFF',
      dark: '#5A5FE0',
    },
    secondary: {
      main: '#6D788D',
      light: '#7F889B',
      dark: '#606A7C',
    },
    error: {
      main: '#FF4D49',
      light: '#FF625F',
      dark: '#E04440',
    },
    warning: {
      main: '#FDB528',
      light: '#FDBE42',
      dark: '#DF9F23',
    },
    info: {
      main: '#26C6F9',
      light: '#40CDFA',
      dark: '#21AEDB',
    },
    success: {
      main: '#72E128',
      light: '#83E542',
      dark: '#64C623',
    },
    background: {
      default: '#282A42',
      paper: '#30334E',
    },
    text: {
      primary: '#EAEAFFDE',
      secondary: '#E7E3FC99',
      disabled: '#E7E3FC61',
    },

  },

});
