import React, { useState } from 'react'
import Searchbar from './components/Searchbar.js'

import { Box, Container, styled, Typography } from '@mui/material';

import { useSelector } from 'react-redux'

const ExerciseBase = styled(Box)(({ theme }) => ({
position: 'relative',
display: 'block',
padding: 0,
borderRadius: 0,
height: '10vh',
widht: '70vw',
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
  width:"50%",
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

const RenderedExercise = ({exercise}) => {
  return (
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
            backgroundColor: '#778899',
          }}
        >
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
          <Box
          sx={{
            display:"flex",
          }}>
            <Typography
            component="h3">tracked:</Typography>
          {exercise.type.map((e,index) => <Typography key={index} color="inherit" sx={{ml:.5}}>{e}</Typography>)}
          </Box>
          </Box>
        </Box>
      </ExerciseBase>
)
  ;
}

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.name.toLowerCase().includes(query.toLowerCase()));
  }
};

export default function Index () {
  const [searchQuery, setSearchQuery] = useState("");
  const exercises = useSelector(state => state.exercisesList);
  let dataFiltered = filterData(searchQuery, exercises);;
  
  if (!exercises) {
    return <section>
      <h2> No Exercises found!</h2>
    </section>
  }

  return (
    <div
      style={{
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 20
      }}
    >
    <Searchbar
    searchQuery={searchQuery} 
    setSearchQuery={setSearchQuery}
    dataFiltered={dataFiltered}
    data={exercises}
    filterData={filterData}
    submitHandler={(e) => {
      e.preventDefault();
      dataFiltered = filterData(searchQuery, exercises);}}
    />
    <Container component="section" sx={{mt:8, mb: 4}}>
      <Box sx={{ mt: 8, display: 'bloc', flexWrap: 'wrap' }}>
        {dataFiltered.map((exercise) => (
          <RenderedExercise key={exercise.id} exercise={exercise} />
            ))
        }
      </Box>
    </Container>
    </div>
  )
}