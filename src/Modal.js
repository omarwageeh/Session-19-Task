import React, { useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
  FormControl,
  Modal,
  InputLabel,
  Button,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
};

const emptyUser = {
  fullName: "",
  userName: "",
  email: "",
  profile: "",
  group: "",
};
export default function BasicModal({
  shown,
  toggleModal,
  edit,
  addUser,
  userToEdit,
}) {
  const [user, setUser] = React.useState(emptyUser);
  React.useEffect(() => {
    if (userToEdit !== "") setUser(userToEdit);
  }, [edit]);

  return (
    <div>
      <Modal
        open={shown}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#050e2d",
              justifyContent: "space-between",
              p: 2,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          >
            <Typography sx={{ fontSize: "25px", color: "white" }}>
              Add New User
            </Typography>
            <Button sx={{ color: "white" }} onClick={toggleModal}>
              <CloseIcon />
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "40px",
              backgroundColor: "#f8fafb",
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          >
            <Typography sx={{ fontSize: "17px", fontWeight: "600" }}>
              Full Name
            </Typography>
            <TextField
              label="Enter full name"
              variant="outlined"
              value={user.fullName}
              onChange={(e) => {
                setUser({ ...user, fullName: e.target.value });
              }}
              sx={{ marginBottom: "10px" }}
            />
            <Typography sx={{ fontSize: "17px", fontWeight: "600" }}>
              User Name
            </Typography>
            <TextField
              label="Enter username"
              variant="outlined"
              value={user.userName}
              onChange={(e) => {
                setUser({ ...user, userName: e.target.value });
              }}
              sx={{ marginBottom: "10px" }}
            />
            <Typography sx={{ fontSize: "17px", fontWeight: "600" }}>
              Email Address
            </Typography>
            <TextField
              label="Enter user email address"
              variant="outlined"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              sx={{ marginBottom: "10px" }}
            />
            <Typography sx={{ fontSize: "17px", fontWeight: "600" }}>
              User Group
            </Typography>
            <FormControl
              sx={{
                pt: "8px",
                minWidth: 150,
                width: "100%",
                marginInlineEnd: "8px",
                marginBottom: "10px",
              }}
              size="small"
            >
              <InputLabel id="demo-simple-select-label" sx={{ pt: "8px" }}>
                User Group
              </InputLabel>

              <Select
                label="Choose User Group"
                sx={{ marginBottom: "8px" }}
                value={user.group}
                onChange={(e) => setUser({ ...user, group: e.target.value })}
              >
                <MenuItem value={"Office"}>Office</MenuItem>

                <MenuItem value={"Head Office"}>Head Office</MenuItem>

                <MenuItem value={"Managers"}>Managers</MenuItem>
              </Select>
            </FormControl>
            <Typography sx={{ fontSize: "17px", fontWeight: "600" }}>
              Assign Profile
            </Typography>
            <FormControl
              sx={{
                pt: "8px",
                minWidth: 150,
                width: "100%",
                marginInlineEnd: "8px",
                marginBottom: "10px",
              }}
              size="small"
            >
              <InputLabel id="demo-simple-select-label" sx={{ pt: "8px" }}>
                User Profile
              </InputLabel>

              <Select
                label="Choose User Profile"
                value={user.profile}
                onChange={(e) => setUser({ ...user, profile: e.target.value })}
              >
                <MenuItem value={"Inactive"}>Inactive</MenuItem>

                <MenuItem value={"Active"}>Active</MenuItem>

                <MenuItem value={"Locked"}>Locked</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1px solid #8a95ab",
              p: 2,
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                textDecoration: "underline",
                color: "black",
                fontWeight: "600",
              }}
              onClick={() => setUser(emptyUser)}
            >
              Reset fields
            </Button>
            <Box>
              <Button
                sx={{
                  border: "1px solid #8a95ab",
                  color: "black",
                  marginInlineEnd: "5px",
                }}
                onClick={() => {
                  setUser(emptyUser);
                  toggleModal();
                }}
              >
                Cancle
              </Button>
              {edit === true ? (
                <Button
                  sx={{
                    backgroundColor: "green",
                    color: "white",
                    ":hover": { backgroundColor: "green " },
                  }}
                  onClick={() => {
                    addUser(user);
                    setUser(emptyUser);
                    toggleModal();
                  }}
                >
                  Edit User
                </Button>
              ) : (
                <Button
                  sx={{
                    backgroundColor: "green",
                    color: "white",
                    ":hover": { backgroundColor: "green " },
                  }}
                  onClick={() => {
                    addUser(user);
                    setUser(emptyUser);
                    toggleModal();
                  }}
                >
                  Add User
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
