import { Container } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import NavBar from "../NavBar/NavBar";
import Auth from "../Auth/Auth";
import Home from "../Home/Home";

const font = "'KoHo', sans-serif";

const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    fontSize: 16,
    button: {
      textTransform: "none",
    },
  },
});

const App = () => {
  const user = useSelector((state) => state.auth);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <NavBar />
        {!user ? <Auth /> : <Home />}
      </Container>
    </ThemeProvider>
  );
};

export default App;
