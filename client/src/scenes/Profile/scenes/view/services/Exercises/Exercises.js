import { createSlice } from '@reduxjs/toolkit'

export const exercisesSlice = createSlice({
  name: 'Exercises',
  initialState: [{
    id: 0,
    ex :{
      name:"Benchpress",
      type:["Date","Weight","Reps"],
      picture:"https://cdn.mos.cms.futurecdn.net/pLaRi5jXSHDKu6WRydetBo-1200-80.jpg",
    },
    work:[{id :0,date: Date(2018, 8, 22),weight:'57kg',reps:'5'},
    {id :1,date: Date(2022, 9, 27),weight:'60kg',reps:'5'},
    {id :2,date: Date(2018, 10, 22),weight:'65kg',reps:'5'}]
  } , { 
    id: 1,
    ex:{
      name:"Plank",
      type:["Date","time"],
      picture:"https://hips.hearstapps.com/hmg-prod/images/hdm119918mh15842-1545237096.png?crop=1.00xw:0.752xh;0,0.248xh&resize=1200:*",
    },
    work:[{id :0,date: Date(2018, 8, 22),time:5*60*1000}]
  } , {
    id: 2,
    ex:{
      name:"Weighted planks",
      type:["Date","Weight","time"],
      picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDqm1cx5cglnxMDjgAOumJQXXS8vh2eM7mw&usqp=CAU",
    },
    work:[{id :0,date: Date(2018, 8, 22),weight:'50kg',time:3*60*1000},
    {id :1,date: Date(2018, 8, 22),weight:'50kg',time:3*60*1000},
    {id :2,date: Date(2018, 10, 22),weight:'55kg',time:3.5*60*1000},
    {id :3,date: Date(2018, 11, 22),weight:'60kg',time:3*60*1000}]
  }, {
    id: 3,
    ex:{
      name:"Stationary bike",
      type:["Date","averageHeartRate","time","level"],
      picture:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/01/stationary_bike_gym_workouts_732x549_thumb.jpg",
    },
    work:[{id :0 ,date: Date(2018, 8, 22),averageHeartRate:'150bpm',time:3*60*1000,level:"3"},
    {id :1,date: Date(2018, 8, 22),averageHeartRate:'162bpm',time:3*60*1000,level:"4"},
    {id :2,date: Date(2018, 10, 22),averageHeartRate:'164bpm',time:3.5*60*1000,level:"4"},
    {id :3,date: Date(2018, 11, 22),averageHeartRate:'155bpm',time:3*60*1000,level:"4"}]
  } 
],
  reducers: {
    addrecord: (state, action) => {
      state[state.findIndex(x => x.id === action.payload.id)].work.push( action.payload.record );
    },
    deleterecord: (state, action) => {
      const foundId = state.findIndex(x => x.id === action.payload.id);
      let foundworkId = "no";
      foundworkId = ((state[foundId]).work).findIndex(x => x.id === action.payload.recordId);
      (foundworkId!=="no" ? (state[foundId]).work.splice(foundworkId,1) : console.log("no such record !"));
    },
    deleteExercise: (state, action) => {
      (state).splice(state.findIndex(x => x.id === action.payload.id), 1);
    },
    addnewExercise: (state, action) => {
      state.push(action.payload);
    },
    addAllExercises:(state,action) => {
      state =action.payload;
    }
  },
})

export const {addrecord, deleterecord, deleteExercise, addnewExercise, addAllExercises  } = exercisesSlice.actions

export const addAllExercisesAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(addAllExercises(amount))
  }, 1000)
}

export const fetchExercisesById = userId => {
  return async (dispatch, getState) => {
    try {
     // const exercises = await userAPI.fetchById(userId)
      // dispatch an action when we get the response back
     // dispatch(userLoaded(user))
    } catch (err) {
      // If something went wrong, handle it here
    }
  }
}

export const selectExercises = (state) => state.exercises

export default exercisesSlice.reducer