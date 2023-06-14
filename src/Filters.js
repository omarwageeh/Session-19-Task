import React from "react";
import {
  Box,
  TextField,
  InputAdornment,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import BlockIcon from "@mui/icons-material/Block";
import LockIcon from "@mui/icons-material/Lock";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const iconStyles = {
  backgroundColor: "#e7e9ef",
  borderRadius: "4px",
  border: "5px solid #e7e9ef",
  boxSizing: "content-box",
  marginInlineEnd: "7px",
};
const buttonStyles = {
  backgroundColor: "#e7e9ef",
  borderRadius: "4px",
  color: "black",
  marginInlineEnd: "7px",
  textTransform: "none",
  ":hover": {
    backgroundColor: "#e7e9ef",
  },
};
const underlineButtonStyle = {
  textTransform: "none",
  color: "black",
  textDecoration: "underline",
};
export default function Filters({ getSearchFilter, children }) {
  const [value, setValue] = React.useState(null);
  const [userStatusValue, setUserStatusValue] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");
  React.useEffect(() => {
    getSearchFilter(searchValue);
  }, [getSearchFilter, searchValue]);
  return (
    <>
      <Box
        sx={{
          border: "1px solid #e7e9ef",
          borderRadius: "10px",
          paddingTop: "10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", padding: "10px" }}>
          <TextField
            sx={{ pt: "8px", marginInlineEnd: "8px" }}
            size="small"
            variant="outlined"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            size="small"
            variant="outlined"
            placeholder="User Name"
            sx={{ pt: "8px", marginInlineEnd: "8px" }}
          />

          <FormControl
            sx={{ pt: "8px", minWidth: 150, marginInlineEnd: "8px" }}
            size="small"
          >
            <InputLabel id="demo-simple-select-label" sx={{ pt: "8px" }}>
              User Status
            </InputLabel>

            <Select value={userStatusValue} label="User Status">
              <MenuItem
                value={"Any"}
                onClick={function () {
                  setUserStatusValue(this.value);
                }}
              >
                Any
              </MenuItem>

              <MenuItem
                value={"Inactive"}
                onClick={function () {
                  setUserStatusValue(this.value);
                }}
              >
                Inactive
              </MenuItem>

              <MenuItem
                value={"Active"}
                onClick={function () {
                  setUserStatusValue(this.value);
                }}
              >
                Active
              </MenuItem>

              <MenuItem
                value={"Locked"}
                onClick={function () {
                  setUserStatusValue(this.value);
                }}
              >
                Locked{" "}
              </MenuItem>
            </Select>
          </FormControl>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Creation Date"
              value={value}
              slotProps={{ textField: { size: "small" } }}
              onChange={(newValue) => setValue(newValue)}
              sx={{ marginInlineEnd: "8px" }}
            />
          </LocalizationProvider>

          <Button sx={underlineButtonStyle}>All Filters</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <EditIcon sx={iconStyles} />
          <BlockIcon sx={iconStyles} />
          <LockIcon sx={iconStyles} />
          <Button sx={buttonStyles}>Assign to Profile</Button>
          <Button sx={buttonStyles}>Assign to Group</Button>
          <MoreVertIcon sx={iconStyles} />
          <Button sx={underlineButtonStyle}>UnSelect All</Button>
        </Box>
        {children}
      </Box>
    </>
  );
}
