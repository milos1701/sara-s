import {
  css,
  Global
} from "@emotion/react";

import {CssBaseline} from "@mui/material";
import {
  createTheme,
  ThemeProvider
} from "@mui/material/styles";

const primaryColor = {
  contrastText: "#FFFFFF",
  dark: "#000000",
  light: "#333333",
  main: "#000000"
};

const secondaryColor = {
  contrastText: "#FFFFFF",
  dark: "#777777",
  light: "#ABABAB",
  main: "#999999"
};

const iconColor = {
  main: "#555555"
};

const invertColor = {
  main: "#FFFFFF"
};

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        legend: {
          transition: "unset !important"
        }
      }
    }
  },
  palette: {
    icon: iconColor,
    invert: invertColor,
    primary: primaryColor,
    secondary: secondaryColor
  }
});

const Theme = ({children}) =>
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        body {
          padding: 0;
          margin: 0;
        }
      `}
    />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </>;

export default Theme;
