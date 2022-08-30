import { Box, Button, Container,Dialog,DialogActions,DialogTitle,List,ListItem,ListItemText,styled, Typography } from '@mui/material';
import React, { useState } from 'react'


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

export default function ExerciseName  ({openbackdrop,addstat,exercise, exworkids,remove}) {

    const [confirm,setconfirm] = useState(false);
    
    const confirmation = () => {
      setconfirm(true);
    };

    const deconfirmation = () =>{
      setconfirm(false);
    }

    const handleClose = ( b =false ) => () => {
      setconfirm(false);
      if ( b ) remove(exercise.id)
    };

    if (!exercise || !exworkids ) return <></>
    return (
    <Container component="section" sx={{mt:8, mb: 4}}>
      <Dialog
        open={confirm}
        onClose={deconfirmation}
      ><DialogTitle id="alert-dialog-title">
      {`Would you like to delete ${exercise.name}'s records from your history?`}
      </DialogTitle>
      <DialogActions>
      <Button onClick={handleClose(false)}>No</Button>
      <Button onClick={handleClose(true)} autoFocus>
        Yes
      </Button>
      </DialogActions>
      </Dialog>
      <Box sx={{ mt: 8, display: 'bloc', flexWrap: 'wrap' }}>
        <ExerciseBase >
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              backgroundImage: `url(${exercise.picture})`,
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
              {exercise.name}
            </Typography>
            <Box className='options' sx={{
              margin: "15px",
              display:"flex",
              height:"38.1966%",
              width:"38.966%",
            }}>
            <Button onClick={openbackdrop} variant="contained"  >Add record</Button>
            <Button onClick={confirmation} variant="contained" color="error" >Delete records</Button>
            </Box>
            </Box>
          </Box></ExerciseBase>
      </Box>
    </Container>)
    ;
}