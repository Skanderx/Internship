import { Avatar, Backdrop, Box, Button, Paper, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Exercices from './components/exercisenames'
import Stats from './components/exercisestats.js'
import AddExercise from './components/addExercise'
export default function ProfilePage() {

    const {profileId} = useParams();
    const [openbackdrop,setopenbackdrop] = useState(false);

    const profile = useSelector(state => 
        state.profiles.find((p) => p.id == profileId)
    )

    if (!profile) {
        return (
            <section>
                <h2>profile not found!</h2>
            </section>
        )
    }
  return (
    <Paper className="background" sx={{
        width: "100vw",
        height:"100vh",
    }}>
        <Backdrop 
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openbackdrop}
        onClick={() => setopenbackdrop(false)}>
         <Paper sx={{width: "90vw"}}>
            <AddExercise pid={profile.id} exWorkIds={profile.exworkids}/>
         </Paper>
        </Backdrop>
        <ProfileContainer>
            <Paper className="Profilebox">
                <Box className="ProfileName">
                  <Typography variant='h5'>name: {profile.name}</Typography>
                </Box>
                
                <Box className="Description">
                    <em>description :</em><div/>
                    {profile.description}
                </Box>
                <Box className="credentials">
                   <em>age: </em>{(new Date().getFullYear() - profile.birthyear)}
                   <div/>
                   <em>weight :</em>{profile.weight}
                </Box>
                <Avatar variant="square" className="Profilepicture"  src={profile.picture} />
            </Paper>
            <Button variant="contained"  onClick={() => setopenbackdrop(!openbackdrop)} >Add new Exercise</Button>
            <Box className="Statistics">
                {//<Exercices/>
                //<Stats/>
            }
            </Box>
        </ProfileContainer>
    </Paper>
    )
}

const ProfileContainer = styled(Paper)(({theme}) => ({
    display: "block",
    height: "100%",
    width: "100%",
    boxSizing:"border-box",
    ".Profilebox":{
        margin: "15px",
        width: "88%",
        display:"flex",
        height:"40vh",
        ".Profilepicture":{
            height:"38.1966%",
            width:"38.966%",
        },
        ".ProfileName":{
          display:"flex",
          width:"100%",
        },
    },
    [theme.breakpoints.down("md")]: {
        width: "calc(100vw -30px)",
        ".Profilebox":{
            height:"auto",
            width:"auto",
        }
      },
}))
