import React  from 'react'
import { Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
export default function index ({
    submitHandler,searchQuery,setSearchQuery
}) {
  return (
    <Box
    component="form"
    sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
    noValidate
    autoComplete="off"
    onSubmit={submitHandler}
    >
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Enter a name"
      variant="outlined"
      placeholder="Search"
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon fontSize='large' style={{ fill: "blue" }} />
    </IconButton>
  </Box>
  )
}
