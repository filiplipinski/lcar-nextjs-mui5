import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const { palette } = createTheme({
  palette: {
    primary: {
      main: '#2d2e28',
    },
    secondary: {
      light: red['700'],
      main: red['800'],
      dark: red['900'],
    },
    background: {
      default: '#f7f7f7',
      paper: '#f1f1f1',
    },
  },
});
