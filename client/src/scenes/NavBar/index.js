import React from 'react'
import {
    AppBar,
    Toolbar
  } from "@mui/material";
import DrawerComponent from "./components/drawer"

function Navbar() {
  return (
    <AppBar position='sticky'>
      <Toolbar className="navbar_container">
      <DrawerComponent />
      </Toolbar>
    </AppBar>

  )
}

export default Navbar