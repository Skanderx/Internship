import { configureStore } from '@reduxjs/toolkit';
import exercisesListReducer from '../scenes/Exercises/services/Exercisesfeature'
import profilesReducer from '../scenes/Profile/services/Profiles/Profilesfeatures'
export default configureStore({
  reducer: {
    exercisesList: exercisesListReducer,
    profiles : profilesReducer,
  },
});
