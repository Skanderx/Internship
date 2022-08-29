import { Box, Button, Container, FormControl, FormHelperText, Input, InputAdornment, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import UploadPhoto from '../../../../components/UploadPhoto';

import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { ProfileAdded } from '../../services/Profiles/Profilesfeatures'

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

export default function Index () {
  const [values,setvalues] = useState({
    name:"",
    gender:"",
    weight:Number(),
    heightm:Number(0),heightcm:Number(0),
    birthYear:Number(),
    description:""});
  const [image,setImage] = useState();

  const dispatch = useDispatch();

  const handleChange = (n:string) => (e) =>{
    switch (n){
      case "description":
      case "name":
      case "gender" :
        return setvalues({...values , [n]:e.target.value});
      case "birthYear":
      case "heightm":
      case "heightcm":
      case "weight":
        return setvalues({...values , [n]:+e.target.value.replace(/[^0-9]/g, '')})
      default:break;
    }}

    const handleImageChange = (event) => {
      setImage(event.target.files[0]);
    }

  const verify = ()=> {
    //height >.50cm <2m
    //birthYear >1900
    //weight 
    //name doesn't exist already async
    //name required
    return false;
  }
  const error = false;
  const onCreateClicked = () => {
    if ( !error && values.name) {
      dispatch(
        ProfileAdded({
          id: nanoid(),
          name: values.name,
          gender: values.gender,
          weight: values.weight,
          birthyear: values.birthYear,
          height: values.heightm*100+values.heightcm,
          description: values.description,
          picture: image,
        })
      )
    }
  }
  return (
  <CenterContainer sx={{ height: "100vh" }}>
    <div style={{
    display: "flex",
    justifyContent: "space-between",
    my: 1,
    }}>
    <TextField
    error={!values.name}
    required
    value={values.name}
    label="Required"
    onChange={handleChange("name")}
    variant="standard"
    helperText="Profile name"
    />
    <div/>
    <TextField
    id="outlined-select-currency"
    select
    label="Select"
    value={values.gender}
    onChange={handleChange("gender")}
    helperText="Gender"
    variant="standard"
    >
    <MenuItem value={""}> don't want to say </MenuItem>
    <MenuItem value={"m"}> male </MenuItem>
    <MenuItem value={"f"}> female </MenuItem>
    </TextField>
    </div>
    <TextField
      error={verify('weight')} 
      id="standard-adornment-weight"
      value={values.weight}
      onChange={handleChange('weight')}
      aria-describedby="standard-weight-helper-text"
      inputProps={{
        'aria-label': 'weight',
      }}
      helperText="Weight in kg"
    />
    <TextField
    error={verify('birthYear')} 
    id="standard-adornment-birthYear"
    value={values.birthYear}
    onChange={handleChange('birthYear')}
    aria-describedby="standard-birthYear-helper-text"
    inputProps={{
      'aria-label': 'birth Year',
    }}
    helperText="Year of birth"
    />
    <div style={{
    display: "flex",
    justifyContent: "space-between",
    my: 1,
    }}>
    <TextField
    error={verify('height')} 
    id="standard-adornment-birthYear"
    value={values.heightm}
    onChange={handleChange('heightm')}
    aria-describedby="standard-heightm-helper-text"
    inputProps={{
      'aria-label': 'heightm',
    }}
    helperText="meters"
    />
    <TextField
    error={verify('height')} 
    id="standard-adornment-birthYear"
    value={values.heightcm}
    onChange={handleChange('heightcm')}
    aria-describedby="standard-heightcm-helper-text"
    inputProps={{
      'aria-label': 'heightcm',
    }}
    helperText="centimeters"      
    />
    </div>
    <TextField
    id="standard-multiline-static"
    label="description"
    multiline
    rows={4}
    value={values.description}
    onChange={handleChange("description")}
    />
    <UploadPhoto
    onChange={handleImageChange}
    imageName={image ? image.name : undefined}
    />
    <Button onClick={onCreateClicked} variant="contained" > <AddIcon fontSize="small"/>Create</Button>
  </CenterContainer>
  )
}
