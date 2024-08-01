import { createTheme } from '@mui/material';

import { breakpoints, general, palette } from '@/styles/theme/constant';

declare module '@mui/material/styles' {
  // eslint-disable-next-line no-unused-vars
  interface Palette {
    custom: typeof palette.custom;
  }
}

const theme = createTheme({
  breakpoints,
  palette,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          overflowX: 'hidden',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '250px',
          color: `${palette.common.white}`,
          '&.MuiButton-contained.Mui-disabled': {
            backgroundColor: `${palette.primary.main}`,
            opacity: 0.3,
            color: `${palette.common.white}`
          },
        },
      },
      // variants: [
      //   {
      //     props: { variant: 'contained', color: 'primary' },
      //     style: {
      //       color: `${palette.common.white}`,
      //     },
      //   }
      // ],
    },
  },
  typography: {
    fontFamily: general.siteFontFamily,
  },
});

export default theme;
