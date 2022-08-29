import { createSlice } from "@reduxjs/toolkit"

const initialState=[{
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
]

const exercisesListSlice = createSlice({
    name: 'ExercisesList',
    initialState: initialState,
    reducers : {
        ExerciseAdded(state,action){
            state.push(action.payload)
        }
    }
})

export const { ExerciseAdded } = exercisesListSlice.actions

export default exercisesListSlice.reducer;