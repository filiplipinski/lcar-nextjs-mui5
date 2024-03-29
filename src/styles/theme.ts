import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { palette } from './palette';
import { navigationHeight } from 'src/common/components/navbar/Navbar';

const mediaQ = (size: number): string => `(max-width: ${size}px)`;

// MUI default ones
const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export const mediaQueries = {
  sm: mediaQ(breakpoints.sm),
  md: mediaQ(breakpoints.md),
  lg: mediaQ(breakpoints.lg),
  xl: mediaQ(breakpoints.xl),
};

// color palette: https://mui.com/customization/color/#color-palette
// default theme: https://mui.com/customization/default-theme/
export const theme = createTheme({
  palette,
  typography,
  breakpoints: {
    values: breakpoints,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollPaddingTop: navigationHeight,
        },
        body: {
          minHeight: '100vh',
          backgroundColor: palette.background.default,
        },
        '#__next': {
          minHeight: '100vh',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        },
        main: {
          flexGrow: 1,
        },
        ol: {
          margin: 0,
          padding: 0,
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
        containedSecondary: {
          border: `1px solid ${palette.common.white}`,
          letterSpacing: 1,
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { color: 'secondary2' },
          style: {
            color: palette.background.default,
          },
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          border: `1px solid ${palette.background.default}`,
          backgroundColor: palette.common.white,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          minHeight: 20,
          color: palette.secondary.main,
          marginBottom: '3px',
        },
      },
    },
  },
});
