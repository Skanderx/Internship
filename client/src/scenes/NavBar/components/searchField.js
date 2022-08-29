import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
export const searchField = () => {
  return (
    <div className="searchbar_container">
        <SearchIcon fontSize='large' color='primary'/>
        <input type="text" placeholder='Search ...' className='searchbar'/>
    </div>
  )
}
export default searchField;