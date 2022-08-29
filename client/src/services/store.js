import { configureStore } from '@reduxjs/toolkit';
import exercisesReducer from '../scenes/Profile/scenes/view/services/Exercises/Exercises';
import exercisesListReducer from '../scenes/Exercises/services/Exercisesfeature'
import profilesReducer from '../scenes/Profile/services/Profiles/Profilesfeatures'
export default configureStore({
  reducer: {
    exercises: exercisesReducer,
    exercisesList: exercisesListReducer,
    profiles : profilesReducer,
  },
});
