import React, { useState , useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { fetchProfiles } from '../../services/Profiles/Profilesfeatures'
import Searchbar from './components/Searchbar.js'
import SingleProfile from './components/SingleProfile.js';
import { Spinner } from '../../../../components/Spinner';

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.name.toLowerCase().includes(query.toLowerCase()));
  }
};

export default function Index () {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch()

  const profiles = useSelector(state => state.profiles.profiles);

  const profilesStatus = useSelector(state => state.profiles.status)
  const error = useSelector(state => state.exercisesList.error)

  let dataFiltered = filterData(searchQuery, profiles);;
  
  let content;
  if ( profilesStatus === 'loading'){
    content = <Spinner />
  } else if (profilesStatus === 'succeeded') {
    content = dataFiltered.map((p) => (
      <SingleProfile
      key={p.id}
      profile={p}
      />
    ))
  } else if (profilesStatus === 'failed') {
    content =<div>{error}</div>
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
    filterData={filterData}
    submitHandler={(e) => {
      e.preventDefault();
      dataFiltered = filterData(searchQuery, profiles);}}
    />
    <div style={{ padding: 3 }}>
        {content}
      </div>
    </div>
  )
}
