import { PaletteOptions } from '@mui/material';
import { red } from '@mui/material/colors';

export const palette: PaletteOptions = {
  primary: {
    main: '#2d2e28',
  },
  secondary: {
    // main: '#e80000', // TODO
    light: red['700'],
    main: red['800'],
    dark: red['900'],
  },
  background: {
    default: '#f7f7f7',
    paper: '#f1f1f1',
  },
  // common:{  // default
  //   white:'#fff',
  //   black: '#000'
  // }
};
