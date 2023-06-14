import Drawer from "./Drawer";
import React from "react";
import DataGrid from "./DataGrid";
import MyModal from "./Modal";
import UserManagment from "./UserManagment.js";

export default function Layout() {
  const [shown, setShown] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [edit, setEdit] = React.useState(false);
  const [toEdit, setToEdit] = React.useState("");
  const toggleModal = (edit, row) => {
    setShown((currnetShown) => {
      if (currnetShown === true) {
        setUser(null);
        setEdit(false);
      }
      return !currnetShown;
    });

    if (edit === "edit") {
      setEdit(true);
      setToEdit(row);
    } else {
      setToEdit("");
    }
  };
  const addUser = (user) => {
    setUser(user);
  };
  return (
    <Drawer>
      <MyModal
        shown={shown}
        toggleModal={toggleModal}
        addUser={addUser}
        userToEdit={toEdit}
        edit={edit}
      />
      <UserManagment setEdit={setEdit} toggleModal={toggleModal} />
      <DataGrid user={user} toggleModal={toggleModal} />
    </Drawer>
  );
}
