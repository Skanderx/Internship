import React from 'react'
import {
    AppBar,
    Toolbar
  } from "@mui/material";
import DrawerComponent from "./components/drawer";
import SearchField from "./components/searchField"

function Navbar() {
  return (
    <AppBar position='sticky'>
      <Toolbar className="navbar_container">
      <DrawerComponent />
      <SearchField></SearchField>
      </Toolbar>
    </AppBar>

  )
}

export default Navbar