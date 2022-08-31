import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"
import { client } from '../../../services/Api/client.js'

const initialState={
    exercises:[{
    id: 0,
    name:"Benchpress",
    type:["Weight","Reps"],
    picture:"https://cdn.mos.cms.futurecdn.net/pLaRi5jXSHDKu6WRydetBo-1200-80.jpg",
    } , { 
    id: 1,
    name:"Plank",
    type:["time"],
    picture:"https://hips.hearstapps.com/hmg-prod/images/hdm119918mh15842-1545237096.png?crop=1.00xw:0.752xh;0,0.248xh&resize=1200:*",
    } , {
    id: 2,
    name:"Weighted planks",
    type:["Weight","time"],
    picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDqm1cx5cglnxMDjgAOumJQXXS8vh2eM7mw&usqp=CAU",
    }, {
    id: 3,
    name:"Stationary bike",
    type:["averageHeartRate","time","level"],
    picture:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/01/stationary_bike_gym_workouts_732x549_thumb.jpg",
    } 
    ],
    status: 'idle',// | 'loading' | 'succeeded' | 'failed',
    error: null,
}

const exercisesListSlice = createSlice({
    name: 'ExercisesList',
    initialState: initialState,
    reducers : {
        ExerciseAdded(state,action){
            state.exercises.push(action.payload)
        }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchExercises.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchExercises.fulfilled, (state, action) => {
            state.status = 'succeeded'
            return action.payload
          })
          .addCase(fetchExercises.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
          .addCase(addNewExercise.fulfilled, (state, action) => {
            // We can directly add the new post object to our posts array
            state.exercises.push(action.payload)
          })
    }
})

export const { ExerciseAdded } = exercisesListSlice.actions

export const selectExsByIds = (state,exIds) => (state.exercisesList.exercises.filter((e) => e.id in exIds))

export const selectAllExercises = state => state.exercisesList.exercises

export const fetchExercises = createAsyncThunk('profiles/fetchExercises', async () =>{
    const response = await client.get('http://localhost:9000/searchexercises');
    return response.data ;
})
export const addNewExercise = createAsyncThunk(
    '/createExercise',
    async initialExercise => {
        const response = await client.post(
            'http://localhost:9000/createExercise',initialExercise
        )
        return response.data
    }
)

export default exercisesListSlice.reducer;