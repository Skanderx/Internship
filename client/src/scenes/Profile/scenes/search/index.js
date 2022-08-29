import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Searchbar from './components/Searchbar.js'
import SingleProfile from './components/SingleProfile.js';

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.name.toLowerCase().includes(query.toLowerCase()));
  }
};

export default function Index () {
  const [searchQuery, setSearchQuery] = useState("");
  const profiles = useSelector(state => state.profiles);
  let dataFiltered = filterData(searchQuery, profiles);;
  
  
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
        {dataFiltered.map((p) => (
          <SingleProfile
          key={p.id}
          profile={p}
          />
        ))}
      </div>
    </div>
  )
}
