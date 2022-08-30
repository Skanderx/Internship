import { Avatar, Backdrop, Box, Button, Paper, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Exercise from './components/exercisenames'
import Stats from './components/exercisestats.js'
import AddExercise from './components/addExercise'
import AddRecord from './components/addRecord.js'
import SelectBar from './components/selectBar'
import { Deleterecord ,RemoveExercise } from './../../services/Profiles/Profilesfeatures'
import { Container } from '@mui/system'

export default function ProfilePage() {

    const {profileId} = useParams();

    const profile = useSelector(state => 
        state.profiles.find((p) => p.id == profileId)
    );

    const exercises = useSelector(
        state => {
          const exIds = profile.exworkids.map((e) =>e.exid);
          return (state.exercisesList.filter((e) => e.id in exIds))
        }
    );

    const [exercise,setExercise] = useState(exercises[0] ||{id: Number(),name:'',type:[],picture:''} );
    const [openbackdrop,setopenbackdrop] = useState(false);
    const [openbackdropRecord,setopenbackdropRecord] = useState(false);
    const dispatch = useDispatch();

    const closeRecordBD = () => setopenbackdropRecord(false);
    const openRecordBD = () => setopenbackdropRecord(true);
    
    const closeExBD = () => setopenbackdrop(false);
    const openExBD = () => setopenbackdrop(true);

    const removeStat = ({exercise,exid,workId}) => () => {
      dispatch(
        Deleterecord({profileId,exid,workId})
      );
      setExercise(exercise);
    };
    const addstat = ( {id,record}) => () => {
      
    };
    const removeExercise = ( exid ) => {
        setExercise(exercises[0]);
        dispatch(RemoveExercise({profileId,exid}));
    };
    const handleChange = (event: SelectChangeEvent, value) => {
      if (value) setExercise(value);
    }

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
        onClick={closeExBD}>
         <Paper sx={{width: "90vw"}}>
            <AddExercise pid={profile.id} exworkids={profile.exworkids}/>
         </Paper>
        </Backdrop>

        <Backdrop 
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openbackdropRecord}
        >
            <Paper sx={{width: "90vw"}}>
                <AddRecord 
                closeBD={closeRecordBD} 
                pid={profile.id} 
                exid={exercise.id} 
                exercise={exercise}
                />
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
            <Button variant="contained"  onClick={openExBD} >Add new Exercise</Button>
            <Container component="section" sx={{mt:8, mb: 4}}>
            <Box sx={{ mt: 8, display: 'bloc', flexWrap: 'wrap' }}>
                <SelectBar
                exercise={exercise}
                exercises={exercises}
                handleChange={handleChange}
                />
                <Exercise 
                exercise={exercise}
                exworkids={profile.exworkids}
                remove={removeExercise}
                addstat={addstat}
                openbackdrop={openRecordBD}
                />
                <Stats 
                exercise={exercise}
                exworkids={profile.exworkids}
                removeStat={removeStat}
                />
                
            </Box></Container>
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
