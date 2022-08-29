import { Autocomplete, Box, Button, Container, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {
    addrecord,
    deleterecord,
    deleteExercise,
    addAllExercises,
    selectExercises,
  } from '../services/Exercises/Exercises';

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
  
export default function Stats() {
  const [inputValue, setInputValue] = React.useState("");
  const exercises = useSelector(selectExercises);
  const [exercise,setExercise] = useState(exercises[0] || {name:"none"});
  const dispatch = useDispatch();
  const removeStat = ({exercise,id,recordId}) => () => {
    dispatch(deleterecord({id,recordId}));
    setExercise(exercise);
    console.log(`${id} => ${recordId}`);
  };
  const handleChange = (event: SelectChangeEvent, value) => {
    setExercise(value);
  }
  return(
    <Container component="section" sx={{mt:8, mb: 4}}>
      <Box sx={{ mt: 8, display: 'bloc', flexWrap: 'wrap' }}>
        {( exercises ? (<Autocomplete
          labelid="name"
          options={exercises}
          value={exercise}
          onChange={handleChange}
          autoHighlight
          selectOnFocus
          handleHomeEndKeys
          getOptionLabel={(option) => option.name}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          renderInput={params => (
            <TextField
              {...params}
              label="Select exercise"
              name="Exercise"
              variant="outlined"
              fullWidth
            />
          )}/>) : null )}
        {(exercise  ? (<TableContainer component={Paper} >
          <Table sx={{ minWidth: 650 }} size="small">
            <TableHead><TableRow>
            {exercise.type.map((row,index) => (
            <TableCell key={index} value={exercise} align="right" >{row}</TableCell>
            ))}</TableRow>
            </TableHead>
            <TableBody>
          {exercise.work.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >  
              <TableCell align="right"> {(new Date(row.date)).toUTCString()} </TableCell>
              {(row.weight ? (<TableCell align="right">{row.weight}</TableCell>) : (null))}
              {(row.reps ? (<TableCell align="right">{row.reps}</TableCell>) : (null))}
              {(row.averageHeartRate ? (<TableCell align="right">{row.averageHeartRate}</TableCell>) : (null))}
              {(row.time ? (<TableCell align="right">{msToTime(row.time)}</TableCell>) : (null))}
              {(row.level ? (<TableCell align="right">{row.level}</TableCell>) : (null))}
              <TableCell align="right"> <Button color="error" onClick={removeStat({exercise:exercise,id:exercise.id,recordId:row.id})}>delete</Button> </TableCell>
            </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>) : ( 
          <></>
        ))}
      </Box></Container>
  )
}