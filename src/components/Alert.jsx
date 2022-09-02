import React from "react";
import { CryptoState } from "../CryptoContext";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { alignProperty } from "@mui/material/styles/cssUtils";

const Alert = () => {
  const { alert, setAlert } = CryptoState;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false });
  };

  return (
    <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
      <MuiAlert
        onClose={handleClose}
        severity={alert.type}
        sx={{ width: "100%" }}
        elevation={10}
        variant="filled"
      >
        {alert.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
