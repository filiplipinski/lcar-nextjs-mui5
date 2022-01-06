import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { typography } from './typography';
import { palette } from './palette';

// color palette: https://mui.com/customization/color/#color-palette
// default theme: https://mui.com/customization/default-theme/
const baseTheme = createTheme({
  palette,
  typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: palette.background?.default,
          minHeight: '100vh',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme);

/**
 * xs:0,
 * sm: 600,
 * md: 900,
 * lg: 1200,
 * xl: 1536
 */
