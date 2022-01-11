import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { typography } from './typography';
import { palette } from './palette';
import { navigationHeight } from 'src/common/components/navbar/Navbar';

// TODO: zrobic scrollbar przezroczysty

// color palette: https://mui.com/customization/color/#color-palette
// default theme: https://mui.com/customization/default-theme/
const baseTheme = createTheme({
  palette,
  typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          scrollBehavior: 'smooth', // it's for working "#" scroll animation
          scrollPaddingTop: navigationHeight,
        },
        body: {
          backgroundColor: palette.background.default,
          height: '100%',
        },
        '#__next': {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
        main: {
          flexGrow: 1,
        },
        a: {
          textDecoration: 'none !important', // important, so it work also for MuiLink
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
