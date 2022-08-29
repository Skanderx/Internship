import React, { useState } from "react"
import {
  Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import IconButton from'@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'

function DrawerComponent() {
    const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
    <Drawer 
    anchor="left"
    className="nav_drawer" 
    open={openDrawer}  
    onClose={() => setOpenDrawer(false)}  
    >
        <List divider='true' className="home_button">
        <ListItem onClick={() => setOpenDrawer(false)}>
        <ListItemText
          primary={
            <Link to="/">
              <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
          }}>
              <HomeIcon color="primary"/>
              <span>Go back to the main menu</span></div>
            </Link>
            }
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 'medium'}}
        /></ListItem></List>
        <Divider />
        <List divider='true' className="Info_section">
        <ListItemText
          primary={
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
          }}>
            <InfoIcon 
            color="primary" 
            fontSize="small"
            />
            <span>Profiles</span>
            </div>}
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 'medium'
          }}
        />
        <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            <Link to="/searchprofiles" className="link">
            View Profiles</Link>
          </ListItemText>
       </ListItem>
       <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            <Link to="/createProfile" className="link">
            Create new Profile</Link>
          </ListItemText>
       </ListItem>
        </List>
        <Divider />
        <List divider='true' className="Info_section">
        <ListItemText
          primary={
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
          }}>
            <InfoIcon 
            color="primary" 
            fontSize="small"
            />
            <span>Exercises</span>
            </div>}
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 'medium'
          }}
        />
        <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            <Link to="/searchexercises" className="link">
            View Exercices</Link>
          </ListItemText>
       </ListItem>
       <ListItem onClick={() => setOpenDrawer(false)}>
          <ListItemText>
            <Link to="/createExercise" className="link">
            Create new Exercise</Link>
          </ListItemText>
       </ListItem>
      </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
      <MenuIcon />
    </IconButton>
  </>
  );
}
export default DrawerComponent;