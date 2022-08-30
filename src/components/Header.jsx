import React, { useState } from "react";
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

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Header = () => {
  const { currency, setCurrency } = CryptoState();

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="secondary" position="static">
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
                Crypto Graphics
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
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Header;
