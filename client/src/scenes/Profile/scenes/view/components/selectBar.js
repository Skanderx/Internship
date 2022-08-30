import { Autocomplete, TextField } from "@mui/material"
import React from "react"

export default function SelectBar({exercises,exercise,handleChange}) {
    const [inputValue, setInputValue] = React.useState("");
    const handleInput = (event, newInputValue) => {
    setInputValue(newInputValue);
    }
    if (!exercises || !exercise || !handleChange) return <></>
    return (
        <Autocomplete
          labelid="name"
          options={exercises}
          value={exercise}
          onChange={handleChange}
          autoHighlight
          selectOnFocus
          handleHomeEndKeys
          isOptionEqualToValue={(option, value) => option.id === value.id}
          getOptionLabel={(option) => option.name}
          inputValue={inputValue}
          onInputChange={handleInput}
          renderInput={params => (
            <TextField
              {...params}
              label="Select exercise"
              name="Exercise"
              variant="outlined"
              fullWidth
            />
          )}/>
    )
}