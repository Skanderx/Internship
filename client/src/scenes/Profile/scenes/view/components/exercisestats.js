import { Autocomplete, Box, Button, Container, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import React, { useState } from "react";

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

export default function Stats({
  exercise,
  removeStat,
  exworkids}) {
  

  if (!exercise || !exworkids ) return <></>

  return(
    <Container component="section" sx={{mt:8, mb: 4}}>
      <Box sx={{ mt: 8, display: 'bloc', flexWrap: 'wrap' }}>
        {(
          exworkids[exworkids.findIndex(x => x.exid == exercise?.id)]?.work  ? (
          <TableContainer component={Paper} >
          <Table sx={{ minWidth: 650 }} size="small">
            <TableHead><TableRow>
            <TableCell key="date" value={exercise} align="right" >Date</TableCell>
            {exercise.type.map((row,index) => (
            <TableCell key={index} value={exercise} align="right" >{row}</TableCell>
            ))}</TableRow>
            </TableHead>
            <TableBody>
          {exworkids[exworkids.findIndex(x => x.exid == exercise?.id)]?.work.map((row) => (
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
              <TableCell align="right"> <Button color="error" 
              onClick={removeStat({
                exercise:exercise,
                exid:exercise.id,
                workId:row.id})}
                >
                delete</Button> </TableCell>
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