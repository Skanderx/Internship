import { Box, Button, Container,Dialog,DialogActions,DialogTitle,List,ListItem,ListItemText,styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    addrecord,
    deleterecord,
    deleteExercise,
    addAllExercises,
    selectExercises,
  } from '../services/Exercises/Exercises';

const ImageBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#000',
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
}));
const ExerciseBase = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    display:"flex",
    width:"100%",
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ExerciceStats  () {
    const exercises = useSelector(selectExercises);
    const dispatch = useDispatch();
    const remove = ( id ) => () => {
      dispatch(deleterecord({id:id}));
      console.log(id)};
    const addstat = ( {id,record}) => () => {
      dispatch(deleteExercise({id:id,record}));
      console.log(id)
    };
    const [confirm,setconfirm] = useState({addStat:false,deleteEx:false});
    const [exercise,setexercise] = useState(exercises[0] || {name:"none"});
    const confirmation = ( {exercise, key} ) => () => {
      setexercise(exercise);
      setconfirm({...confirm,[key]:!confirm[key]});
    };
    const handleClose = ({ b =false, key}) => () => {
      setconfirm({...confirm,[key]:!confirm[key]});
      if ( b ) { 
        switch (key) {
          case "deleteEx":
            dispatch(deleteExercise({id:exercise.id}))
          break;
          case "addStat":
          break;
          default : break;
        }
      }
    };
    return (
    <Container component="section" sx={{mt:8, mb: 4}}>
      <Dialog
        open={confirm.deleteEx}
        onClose={confirmation}
      ><DialogTitle id="alert-dialog-title">
      {`Would you like to delete " ${exercise.ex.name} " from your followed exercises list?`}
      </DialogTitle>
      <DialogActions>
      <Button onClick={handleClose({key:"deleteEx"})}>No</Button>
      <Button onClick={handleClose({b:true,key:"deleteEx"})} autoFocus>
        Yes
      </Button>
      </DialogActions>
      </Dialog>
      <Box sx={{ mt: 8, display: 'bloc', flexWrap: 'wrap' }}>
        {(exercises ? 
          exercises.map((exercise) => (
          <ExerciseBase 
          key={exercise.id}
          >
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              backgroundImage: `url(${exercise.ex.picture})`,
            }}
          >
            <ImageBackdrop className="imageBackdrop" />
            <Box
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'common.white',
            }}
          >
            <Typography
              component="h3"
              variant="h6"
              color="inherit"
              className="imageTitle"
            >
              {exercise.ex.name}
            </Typography>
            <Box className='options' sx={{
              margin: "15px",
              display:"flex",
              height:"38.1966%",
              width:"38.966%",
            }}>
            <Button onClick={confirmation({exercise: exercise,key:"addStat"})} variant="contained"  >Add record</Button>
            <Button onClick={confirmation({exercise: exercise,key:"deleteEx"})} variant="contained" color="error" >Delete</Button>
            </Box>
            </Box>
          </Box></ExerciseBase>
        )) : null)}
      </Box>
    </Container>)
    ;
}