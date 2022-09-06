import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { CryptoState } from "../CryptoContext";
import AuthModal from "./Authentication/AuthModal";
import UserSidebar from "./Authentication/UserSidebar";
import { NavLink } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#F33F3F",
      secondary: {
        main: "#F33F3F",
      },
    },
    type: "dark",
  },
});

const Header = () => {
  const { currency, setCurrency, user } = CryptoState();

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="primary" position="static">
          <Container>
            <Toolbar>
              <Typography
                style={{
                  flex: 1,
                  color: "white",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                variant="h5"
              >
                <NavLink
                  to="/"
                  style={{
                    flex: 1,
                    color: "white",
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  Crypto Charts
                </NavLink>
              </Typography>
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                style={{
                  width: 100,
                  height: 40,
                  marginLeft: 10,
                }}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
              </Select>
              {user ? <UserSidebar /> : <AuthModal />}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Header;
