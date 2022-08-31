import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import { addNewRecord } from '../../../services/Profiles/Profilesfeatures'

import { Button, FormControl, FormGroup, FormLabel, Input, TextField } from '@mui/material';
import { Container } from '@mui/system';

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
export default function AddRecord ({closeBD , pid , exid , exercise})  {
   
    const [work,setwork] = useState({
    date: Date,
    weight : '',
    reps : '',
    timesec : '0',
    timemin : '0',
    averageHeartRate : '',
    level : ''
    });

  const dispatch = useDispatch();

  const handleChange = (n:string) => (e) =>{
    switch (n){
      case "level":
      case "date":
      return setwork({...work , [n]:e.target.value});
      case "averageheartrate":
      return setwork({...work , averageHeartRate:e.target.value.replace(/[^0-9]/g, '')})
      case "timemin":
      case "timesec":
      case "reps":
      case "weight":
        return setwork({...work , [n]:e.target.value.replace(/[^0-9]/g, '')})
      default:break;
    }
}
  const verify = ()=> {
    //all required
    return false;
  }
  const error = false;

  const onCreateClicked = () => {
    let date = (new Date()).toISOString();
    let obj ={id: nanoid() ,date }
    if (work.weight) obj.weight=work.weight.toString()+"kg";
    if (work.reps) obj.reps=work.reps;
    if (work.timesec || work.timemin) obj.time=+(work.timemin*60*1000+work.timesec*1000);
    if (work.averageHeartRate) obj.averageHeartRate=work.averageHeartRate.toString()+"bpm";
    if (work.level) obj.level=work.level;
    if ( !error ) {
        console.log(exid)
      dispatch(
        addNewRecord(pid)({exid, obj })
      ).unwrap();
      setwork({
        date: Date,
        weight : '',
        reps : '',
        timesec : '0',
        timemin : '0',
        averageHeartRate : '',
        level : ''
        });
      closeBD();
    }
    else {
        alert("data is incomplete");
    }
  }
  return (<>
  <Button onClick={closeBD} variant="contained" color="error" > <CloseIcon fontSize="small"/>Close</Button>
  <CenterContainer sx={{padding :10}}>
    <FormGroup row={true} >
    {
      exercise.type.map( (type) =>
      
        {
            if (type==="time") return (
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    my: 1,
                    }}
                    key={type}
                >
                <FormControl
                sx={{ m: 2, width: '20ch' }}
                required
                component="fieldset"
                variant="standard"
                noValidate
                autoComplete="off"
                >
                <FormLabel component="legend" >time minutes :</FormLabel>
                <Input
                error={verify(work.timemin)}
                value={work.timemin}
                onChange={handleChange("timemin")}
                inputProps={{
                'aria-label': 'Names',
                }}
                />
                </FormControl>
                <FormControl
                sx={{ m: 2, width: '20ch' }}
                required
                component="fieldset"
                variant="standard"
                noValidate
                autoComplete="off"
                >
                <FormLabel component="legend" >time seconds :</FormLabel>
        
                <Input
                error={verify(work.timesec)}
                value={work.timesec}
                onChange={handleChange("timesec")}
                inputProps={{
                'aria-label': 'Names',
                }}
                />
                </FormControl></div>
            )

        return (<FormControl
        sx={{ m: 2, width: '20ch' }}
        key={type}
        required
        component="fieldset"
        variant="standard"
        noValidate
        autoComplete="off"
        >
        <FormLabel component="legend" >{type} :</FormLabel>

        <Input
        error={verify(type)}
        value={work[type]}
        onChange={handleChange(type.toLowerCase())}
        inputProps={{
        'aria-label': 'Names',
        }}
        />
        
        </FormControl>)}
    )
    }</FormGroup>
    <Button onClick={onCreateClicked} variant="contained" > <AddIcon fontSize="small"/>Create</Button>
    </CenterContainer></>
  )
}
