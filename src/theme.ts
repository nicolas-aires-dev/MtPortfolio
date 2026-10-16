import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#F5F0E8',
    },
  },
  typography:{
    fontFamily: "BlinkMacSystemFont"
  }
});

theme = responsiveFontSizes(theme);

export default theme;