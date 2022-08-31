import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Input, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import UploadPhoto from '../../../../components/UploadPhoto'

import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { addNewExercise } from '../../services/Exercisesfeature'

function CenterContainer({ children, sx }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        ...sx,
      }}
    >
      {children}
    </Container>
  );
}

export default function CreateEx () {
    const [picture, setPicture] = useState("");
    const [name, setName] = useState("");
    const [typecheck, setTypecheck] = useState({
        weight : false,
        repetitions : false,
        time : false,
        heartrate : false,
        level : false,
    });
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setTypecheck({
          ...typecheck,
          [event.target.name]: event.target.checked,
        });
    };
    const handleImageChange = (event) => {
      setPicture(event.target.value);
    }

    const {weight, repetitions, time, heartrate, level } = typecheck;
    const error = !name || [weight, repetitions, time, heartrate, level].filter((v) => v).length == 0 || addRequestStatus !== 'idle';

    const onCreateClicked = () => {
      if (!error){
        let type = [];
        if (typecheck.weight) type.push("weight");
        if (typecheck.repetitions) type.push("repetitions" );
        if (typecheck.time) type.push("time");
        if (typecheck.heartrate) type.push("heartrate");
        if (typecheck.level) type.push("level");
        try {
        setAddRequestStatus('pending')
        dispatch(addNewExercise({name,type,picture})).unwrap()
        setTypecheck({
          weight : false,
          repetitions : false,
          time : false,
          heartrate : false,
          level : false
        });
        setPicture("");
        setName("");
      } catch (err) {
        console.error('Failed to save the post: ', err)
      } finally {
        setAddRequestStatus('idle')
      }
    }
    }
    return (
    <CenterContainer sx={{ height: "100vh" }}>
      <FormControl 
      required
      component="fieldset"
      variant="standard"
      sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
      noValidate
      autoComplete="off">
        <FormLabel component="legend" >Name of the exercise :</FormLabel>
        <Input
        id="standard-adornment-name"
        error={false} 
        value={name}
        onChange={(e) => setName(e.target.value)}
        inputProps={{
        'aria-label': 'Names',
        }}
        /></FormControl>
        <FormControl
        required
        error={error}
        component="fieldset"
        variant="standard"
        >
        <FormLabel component="legend" >Select what to track :</FormLabel>
          <FormGroup >
            <FormControlLabel
                control={<Checkbox checked={weight} onChange={handleChange} name="weight" />}
                label="Weight"
            />
            <FormControlLabel
                control={<Checkbox checked={repetitions} onChange={handleChange} name="repetitions" />}
                label="Repetitions"
            />
            <FormControlLabel
                control={<Checkbox checked={time} onChange={handleChange} name="time" />}
                label="Time"
            />
            <FormControlLabel
                control={<Checkbox checked={heartrate} onChange={handleChange} name="heartrate" />}
                label="HeartRate"
            />
            <FormControlLabel
                control={<Checkbox checked={level} onChange={handleChange} name="level" />}
                label="level"
            />
        </FormGroup>
        {(error ? <FormHelperText>pick one or more</FormHelperText> : null)}
        </FormControl>
        <FormControl 
        component="fieldset"
        variant="standard"
        sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
        noValidate
        autoComplete="off">
        <FormLabel component="legend" >Link to a picture :</FormLabel>
        <Input
        id="standard-adornment-name"
        error={false} 
        value={picture}
        onChange={handleImageChange}
        inputProps={{
        'aria-label': 'Link',
        }}
        />
      </FormControl>
        <Button onClick={onCreateClicked} variant="contained" disabled={error} > <AddIcon fontSize="small"/>Create</Button>
      </CenterContainer>      
      )
}
