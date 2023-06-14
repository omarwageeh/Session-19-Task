import React from "react";
import { Box, Typography, Button } from "@mui/material";
export default function UserManagment({ setEdit, toggleModal }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
        User Managment
      </Typography>
      <Button
        sx={{
          backgroundColor: "green",
          color: "white",
          textTransform: "capitalize",
          fontWeight: "bold",
          ":hover": {
            backgroundColor: "green",
          },
        }}
        onClick={() => {
          setEdit(false);
          toggleModal();
        }}
      >
        + Add New
      </Button>
    </Box>
  );
}
