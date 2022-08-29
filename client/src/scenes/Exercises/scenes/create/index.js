import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Input, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import UploadPhoto from '../../../../components/UploadPhoto'

import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { ExerciseAdded } from '../../services/Exercisesfeature'

export default function CreateEx () {
    const [picture, setPicture] =useState();
    const [name, setName] =useState("");
    const [typecheck, setTypecheck] = useState({
        weight : false,
        repetitions : false,
        time : false,
        heartrate : false,
        level : false
    });

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setTypecheck({
          ...typecheck,
          [event.target.name]: event.target.checked,
        });
    };
    const handleImageChange = (event) => {
      setPicture(event.target.files[0]);
    }

    const {weight, repetitions, time, heartrate, level } = typecheck;
    const error = [weight, repetitions, time, heartrate, level].filter((v) => v).length == 0;

    const onCreateClicked = () => {
      if (name && !error){
        const type = [];
        if (weight) type.push("weight");
        if (repetitions) type.push("repetitions" );
        if (time) type.push("time");
        if (heartrate) type.push("heartrate");
        if (level) type.push("level");
        dispatch(
          ExerciseAdded({
            id: nanoid(),
            name,
            type,
            picture
          })
        )
        setTypecheck({weight : false,
          repetitions : false,
          time : false,
          heartrate : false,
          level : false
        });
        setPicture("");
        setName("");
      }
    }
    return (
    <Box>
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
        />
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
        </FormControl>
        <UploadPhoto
        onChange={handleImageChange}
        imageName={picture ? picture.name : undefined}
        />
        <Button onClick={onCreateClicked} variant="contained" > <AddIcon fontSize="small"/>Create</Button>
      
      </Box>      
      )
}
