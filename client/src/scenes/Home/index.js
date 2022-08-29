import React from 'react'
import JobCategories from './components/JobCategories'
import BrandHero from './components/BrandHero'
import BrandValues from './components/BrandValues'

function Home() {
  return (
    <div>
        <BrandHero/>
        <BrandValues/>
        <JobCategories/>
    </div>
  )
}

export default Home