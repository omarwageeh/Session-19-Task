import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import GridToolbar from "./Filters";
import { UndoRounded } from "@mui/icons-material";

const columns = [
  {
    field: "fullName",
    headerName: "Name",
    sortable: false,
    flex: 1,
    editable: true,
  },

  {
    field: "userName",
    headerName: "User Name",
    sortable: false,
    flex: 1,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email Address",
    flex: 1,
    editable: true,
  },

  {
    field: "group",
    headerName: "Group",
    flex: 1,
    editable: true,
  },
  {
    field: "profile",
    headerName: "Status",
    flex: 1,
    editable: true,
  },
  {
    field: "createdOn",
    headerName: "Created On",
    flex: 1,
    editable: true,
  },
];

let rows = [
  {
    id: 1,
    fullName: "Snow Jon",
    userName: "snow.jon",
    group: "Office",
    email: "snow.jon@gmail.com",
    profile: "Locked",
    createdOn: "Dec 10, 2022",
  },
  {
    id: 2,
    fullName: "Cersei Lannister",
    userName: "cersei.lannister",
    email: "lanister.cersei.gmail.com",
    group: "Managers",
    profile: "Inactive",
    createdOn: "Sep 10, 2022",
  },
  {
    id: 3,
    fullName: "Jaime Lannister",
    userName: "jaime.lannister",
    email: "jamie.lannister.gmail.com",
    group: "Head Office",
    profile: "Active",
    createdOn: "Dec 10, 2019",
  },
  {
    id: 4,
    fullName: "Arya Stark",
    userName: "arya.stark",
    email: "arya.stark@gmail.com",
    group: "Office",
    profile: "Inactive",
    createdOn: "Mar 01, 2023",
  },
  {
    id: 5,
    fullName: "Daenerys Targaryen",
    userName: "daenerys targaryen",
    email: "targaryen.daenerys@gmail.com",
    group: "HQ",
    profile: "Inactive",
    createdOn: "Apr 10, 2022",
  },
  {
    id: 6,
    fullName: "Melisandre",
    userName: "melisandre",
    email: "melisandre@gmail.com",
    group: "Head Office",
    profile: "Locked",
    createdOn: "Jun 12, 2022",
  },
  {
    id: 7,
    fullName: "Ferrara Clifford",
    userName: "ferrara.clifford",
    email: "clifford.ferrara@gmail.com",
    group: "Managers",
    profile: "Locked",
    createdOn: "Jan 10, 2023",
  },
  {
    id: 8,
    fullName: "Rossini Frances",
    userName: "rossini.frances",
    email: "frances.rossini@gmail.com",
    group: "Office",
    profile: "Inactive",
    createdOn: "Dec 10, 2022",
  },
  {
    id: 9,
    fullName: "Roxie Harvey",
    userName: "roxie.harvey",
    email: "roxie.harvey@gmail.com",
    group: "HQ",
    profile: "Active",
    createdOn: "May 09, 2021",
  },
];

export default function DataGridDemo({ user, toggleModal }) {
  const [rowsData, setRowsData] = React.useState(rows);

  React.useEffect(() => {
    if (user !== null) {
      if (user.id === undefined) {
        setRowsData([...rowsData, { id: rowsData.length + 1, ...user }]);
        rows.push(user);
      } else {
        setRowsData(
          rowsData.map((item) => {
            if (item.id === user.id) return user;
            else return item;
          })
        );
        rows = rows.map((item) => {
          if (item.id === user.id) return user;
          else {
            return item;
          }
        });
      }
    }
  }, [user]);

  const getSearchFilter = (filter) => {
    if (filter === "") {
      setRowsData(rows);
    } else {
      setRowsData(
        rows.filter(
          (item) =>
            item.fullName.toLowerCase().includes(filter) ||
            item.userName.toLowerCase().includes(filter) ||
            item.email.toLowerCase().includes(filter)
        )
      );
    }
  };
  return (
    <Box
      sx={{
        height: 600,
        width: "100%",
      }}
    >
      <DataGrid
        rows={rowsData}
        columns={columns}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f8fafb",
            color: "#8a95ab",
          },
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
        slotProps={{ toolbar: { getSearchFilter } }}
        onRowClick={(e) => {
          toggleModal("edit", e.row);
        }}
      />
    </Box>
  );
}
