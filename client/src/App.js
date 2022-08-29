import { Routes, Route } from 'react-router-dom';
import Home from './scenes/Home/index'
import Searchprofiles from './scenes/Profile/scenes/search/index'
import Profile from './scenes/Profile/scenes/view'
import CreateProfile from './scenes/Profile/scenes/create/index'
import SearchExercises from './scenes/Exercises/index'
import CreateExercise from './scenes/Exercises/scenes/create/index'
import NavBar from './scenes/NavBar/index'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/searchprofiles" element={<Searchprofiles />} />
        <Route path="/createProfile" element={<CreateProfile />} />

        <Route path="/searchexercises" element={<SearchExercises />} />
        <Route path="/createExercise" element={<CreateExercise />} />
        
        <Route path="/profile/:profileId" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
