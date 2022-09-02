import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { CryptoState } from "../../CryptoContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAlert } = CryptoState();

  const handleSubmit = () => {};

  return (
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        onClick={handleSubmit}
        style={{ backgroundColor: "#EEBC1D" }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
