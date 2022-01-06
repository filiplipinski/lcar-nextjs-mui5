import { Palette } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typography = (palette: Palette): TypographyOptions => ({
  fontFamily: ['Sen', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  // fontWeightLight: 300, // default
  // fontWeightRegular: 400,// default
  // fontWeightMedium: 500,// default
  // fontWeightBold: 700, // default
  h1: {
    color: palette.primary.main,
    fontWeight: 800,
    textTransform: 'uppercase',
    fontSize: '5rem',
  },
  h2: {
    color: palette.primary.main,
    fontWeight: 800,
    textTransform: 'uppercase',
  },
  h3: {
    color: palette.primary.main,
    fontWeight: 800,
    textTransform: 'uppercase',
  },
  h4: {
    color: palette.primary.main,
    fontWeight: 800,
    textTransform: 'uppercase',
  },
  h5: {
    color: palette.primary.main,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  subtitle1: {
    // fontSize: '1.125rem', // 18px
    color: palette.primary.main,
  },
  subtitle2: {
    color: palette.primary.main,
  },
  body1: {
    color: palette.primary.main,
  },
  body2: {
    color: palette.primary.main,
  },
  caption: {
    color: palette.primary.main,
  },
  button: {
    color: palette.primary.main,
  },
});
