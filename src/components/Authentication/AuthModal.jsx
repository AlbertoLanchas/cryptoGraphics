import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Login from "./Login";
import SignUp from "./SignUp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          width: 85,
          height: 40,
          marginLeft: 15,
          backgroundColor: "violet",
        }}
      >
        LOGIN
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{ ...style, width: 400 }}
          style={{
            width: 400,
            backgroundColor: "rgb(59, 55, 55)",
            color: "white",
            borderRadius: 10,
          }}
        >
          <AppBar
            position="static"
            style={{
              backgroundColor: "transparent",
              color: "white",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              style={{ borderRadius: 10 }}
            >
              <Tab label="Login" />
              <Tab label="Sign Up" />
            </Tabs>
          </AppBar>
          {value === 0 && <Login handleClose={handleClose} />}
          {value === 1 && <SignUp handleClose={handleClose} />}
        </Box>
      </Modal>
    </div>
  );
}
