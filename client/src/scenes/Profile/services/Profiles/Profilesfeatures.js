import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"
import { client } from '../../../../services/Api/client.js'

const initialState = {
  profiles :[{
    id: 0,
    exworkids:[
        {exid:0,work:[
            {id :0,date: "2018, 8, 22",weight:'57kg',reps:'5'},
            {id :1,date: "2022, 9, 27",weight:'60kg',reps:'5'},
            {id :2,date: "2018, 10, 22",weight:'65kg',reps:'5'}
        ]},
        {exid:1,work:[{id :0,date: "2018, 8, 22",time:300000}]},
        {exid:2,work:[{id :0,date: "2018, 8, 22",weight:'50kg',time:180000},
        {id :1,date: "2018, 8, 22",weight:'50kg',time:180000},
        {id :2,date: "2018, 10, 22",weight:'55kg',time:300000},
        {id :3,date: "2018, 11, 22",weight:'60kg',time:180000}]},
        {exid:3,work:[{id :0 ,date: "2018, 8, 22",averageHeartRate:'150bpm',time:180000,level:"3"},
        {id :1,date: "2018, 8, 22",averageHeartRate:'162bpm',time:180000,level:"4"},
        {id :2,date: "2018, 10, 22",averageHeartRate:'164bpm',time:300000,level:"4"},
        {id :3,date: "2018, 11, 22",averageHeartRate:'155bpm',time:180000,level:"4"}]
      }
    ],
    name: "blanky",
    gender:"m",
    weight: "80",
    birthyear : 1985,
    height : 180,
    description :"Trains to lose weight",
    picture: "https://liveboldandbloom.com/wp-content/uploads/2021/09/Untitled_design_3_1.png",
    } , {
    id: 1,
    exworkids:[
        {exid:0,work:[{id :0,date: "2018, 8, 22",weight:'57kg',reps:'5'},
        {id :1,date: "2022, 9, 27",weight:'60kg',reps:'5'},
        {id :2,date: "2018, 10, 22",weight:'65kg',reps:'5'}]},
        {exid:1,work:[{id :0,date: "2018, 8, 22",time:300000}]},
        {exid:2,work:[{id :0,date: "2018, 8, 22",weight:'50kg',time:180000},
        {id :1,date: "2018, 8, 22",weight:'50kg',time:180000},
        {id :2,date: "2018, 10, 22",weight:'55kg',time:300000},
        {id :3,date: "2018, 11, 22",weight:'60kg',time:180000}]},
        {exid:3,work:[{id :0 ,date: "2018, 8, 22",averageHeartRate:'150bpm',time:180000,level:"3"},
        {id :1,date: "2018, 8, 22",averageHeartRate:'162bpm',time:180000,level:"4"},
        {id :2,date: "2018, 10, 22",averageHeartRate:'164bpm',time:300000,level:"4"},
        {id :3,date: "2018, 11, 22",averageHeartRate:'155bpm',time:180000,level:"4"}]
      }
    ],
    name: "blanky",
    gender:"m",
    weight: "80",
    birthyear : 1985,
    height : 180,
    description :"Trains to lose weight",
    picture: "https://liveboldandbloom.com/wp-content/uploads/2021/09/Untitled_design_3_1.png",
    } , {
    id: 2,
    exworkids:[
        {exid:0,work:[{id :0,date: "2018, 8, 22",weight:'57kg',reps:'5'},
        {id :1,date: "2022, 9, 27",weight:'60kg',reps:'5'},
        {id :2,date: "2018, 10, 22",weight:'65kg',reps:'5'}]},
        {exid:1,work:[{id :0,date: "2018, 8, 22",time:300000}]},
        {exid:2,work:[{id :0,date: "2018, 8, 22",weight:'50kg',time:180000},
        {id :1,date: "2018, 8, 22",weight:'50kg',time:180000},
        {id :2,date: "2018, 10, 22",weight:'55kg',time:300000},
        {id :3,date: "2018, 11, 22",weight:'60kg',time:180000}]},
        {exid:3,work:[{id :0 ,date: "2018, 8, 22",averageHeartRate:'150bpm',time:180000,level:"3"},
        {id :1,date: "2018, 8, 22",averageHeartRate:'162bpm',time:180000,level:"4"},
        {id :2,date: "2018, 10, 22",averageHeartRate:'164bpm',time:300000,level:"4"},
        {id :3,date: "2018, 11, 22",averageHeartRate:'155bpm',time:180000,level:"4"}]
      }
    ],
    name: "blanky",
    gender:"m",
    weight: "80",
    birthyear : 1985,
    height : 180,
    description :"Trains to lose weight",
    picture: "https://liveboldandbloom.com/wp-content/uploads/2021/09/Untitled_design_3_1.png",
    } , 
    {
        id: 3,
        exworkids:[
            {exid:0,work:[{id :0,date: "2018, 8, 22",weight:'57kg',reps:'5'},
            {id :1,date: "2022, 9, 27",weight:'60kg',reps:'5'},
            {id :2,date: "2018, 10, 22",weight:'65kg',reps:'5'}]},
            {exid:1,work:[{id :0,date: "2018, 8, 22",time:300000}]},
            {exid:2,work:[{id :0,date: "2018, 8, 22",weight:'50kg',time:180000},
            {id :1,date: "2018, 8, 22",weight:'50kg',time:180000},
            {id :2,date: "2018, 10, 22",weight:'55kg',time:300000},
            {id :3,date: "2018, 11, 22",weight:'60kg',time:180000}]},
            {exid:3,work:[{id :0 ,date: "2018, 8, 22",averageHeartRate:'150bpm',time:180000,level:"3"},
            {id :1,date: "2018, 8, 22",averageHeartRate:'162bpm',time:180000,level:"4"},
            {id :2,date: "2018, 10, 22",averageHeartRate:'164bpm',time:300000,level:"4"},
            {id :3,date: "2018, 11, 22",averageHeartRate:'155bpm',time:180000,level:"4"}]
          }
        ],
        name: "blanky",
        gender:"m",
        weight: "80",
        birthyear : 1985,
        height : 180,
        description :"Trains to lose weight",
        picture: "https://liveboldandbloom.com/wp-content/uploads/2021/09/Untitled_design_3_1.png",
        } ,
        {
            id: 4,
            exworkids:[
                {exid:0,work:[{id :0,date: "2018, 8, 22",weight:'57kg',reps:'5'},
                {id :1,date: "2022, 9, 27",weight:'60kg',reps:'5'},
                {id :2,date: "2018, 10, 22",weight:'65kg',reps:'5'}]},
                {exid:1,work:[{id :0,date: "2018, 8, 22",time:300000}]},
                {exid:2,work:[{id :0,date: "2018, 8, 22",weight:'50kg',time:180000},
                {id :1,date: "2018, 8, 22",weight:'50kg',time:180000},
                {id :2,date: "2018, 10, 22",weight:'55kg',time:300000},
                {id :3,date: "2018, 11, 22",weight:'60kg',time:180000}]},
                {exid:3,work:[{id :0 ,date: "2018, 8, 22",averageHeartRate:'150bpm',time:180000,level:"3"},
                {id :1,date: "2018, 8, 22",averageHeartRate:'162bpm',time:180000,level:"4"},
                {id :2,date: "2018, 10, 22",averageHeartRate:'164bpm',time:300000,level:"4"},
                {id :3,date: "2018, 11, 22",averageHeartRate:'155bpm',time:180000,level:"4"}]
              }
            ],
            name: "blanky",
            gender:"m",
            weight: "80",
            birthyear : 1985,
            height : 180,
            description :"Trains to lose weight",
            picture: "https://liveboldandbloom.com/wp-content/uploads/2021/09/Untitled_design_3_1.png",
            } ,
            {
                id: 5,
                exworkids:[
                ],
                name: "blanky",
                gender:"m",
                weight: "80",
                birthyear : 1985,
                height : 180,
                description :"Trains to lose weight",
                picture: "https://liveboldandbloom.com/wp-content/uploads/2021/09/Untitled_design_3_1.png",
            },
  ],
  status: 'idle',// | 'loading' | 'succeeded' | 'failed',
  error: null,
};

const profilesSlice = createSlice({
    name: 'Profiles',
    initialState: initialState,
    reducers : {
      ProfileAdded(state,action){
            state.profiles.push(action.payload)
      },
      ExerciseAdded(state,action){
            const foundIndex = state.profiles.findIndex(x => x.id ==action.payload.pid);
            const foundExIndex = state.profiles[foundIndex].exworkids.findIndex(x => x.exid ==action.payload.exid);
            (foundExIndex!==-1 ? 
              console.log("already added!") 
            : 
              state.profiles[foundIndex].exworkids.push({
                exid:action.payload.exid,
                work:[]
              })
            );
      },
      RemoveExercise(state,action){
        const foundIndex = state.profiles.findIndex(x => x.id ==action.payload.profileId);
        const foundExIndex = state.profiles[foundIndex].exworkids.findIndex(x => x.exid ==action.payload.exid);
        (foundExIndex!==-1 ?
          (state.profiles[foundIndex].exworkids)[foundExIndex].work=[]
          : console.log("no such exercise !")
        );
      },
      RecordAdded(state,action){
        const foundIndex = state.profiles.findIndex(x => x.id ==action.payload.pid);
        const foundExIndex = state.profiles[foundIndex].exworkids.findIndex(x => x.exid ==action.payload.exid);
        (foundExIndex!==-1 ? state.profiles[foundIndex].exworkids[foundExIndex].work.push(action.payload.obj)
        : console.log("no such exercise !"))
      },
      Deleterecord(state,action){
        const foundIndex = state.profiles.findIndex(x => x.id ==action.payload.profileId);
        const foundExIndex = state.profiles[foundIndex].exworkids.findIndex(x => x.exid ==action.payload.exid);
        let foundworkIndex =-1;
        (foundExIndex!==-1 ? 
        foundworkIndex = state.profiles[foundIndex].exworkids[foundExIndex].work.findIndex(x => x.id ==action.payload.workId) 
        : console.log("no such exercise !")
        );
        (foundworkIndex!==-1 ? state.profiles[foundIndex].exworkids[foundExIndex].work.splice(foundworkIndex,1)
        : console.log("no such record !")
        );
    
      },
      extraReducers(builder) {
        builder
          .addCase(fetchProfiles.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchProfiles.fulfilled, (state, action) => {
            state.status = 'succeeded'
            return action.payload
          })
          .addCase(fetchProfiles.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })

          .addCase(addNewProfile.fulfilled, (state, action) => {
            state.profiles.push(return action.payload)
          })
          .addCase(addNewRecord().fulfilled, (state, action) => {
            state.profiles.push(return action.payload)
          })
          .addCase(addNewExercise().fulfilled, (state, action) => {
            state.profiles.push(return action.payload)
          })
          .addCase(deleteRecord().fulfilled, (state, action) => {
            state.profiles.push(return action.payload)
          })
      }
    }
})

export const { ProfileAdded , ExerciseAdded , Deleterecord , RecordAdded , RemoveExercise} = profilesSlice.actions

export const selectProfileById = (state,profileId) => 
  state.profiles.profiles.find( profile => profile.id == profileId)
;
export const fetchProfiles = createAsyncThunk('profiles/fetchProfiles', async () =>{
  const response = await client.get('http://localhost:9000/searchprofiles');
  return response.data ;
})

export const addNewProfile = createAsyncThunk(
  '/createProfile',
  async initialProfile => {
      const response = await client.post(
          'http://localhost:9000/createProfile',initialProfile
      )
      return response.data
  }
)

export const addNewRecord = (profileId) =>  () => createAsyncThunk(
  '/profile:profileId',
  async initialExercise => {
      const response = await client.post(
        `http://localhost:9000/profile/${profileId}/addRecord`,initialExercise
      )
      return response.data
  }
)

export const addNewExercise = (profileId) =>  () =>  createAsyncThunk(
  '/profile:profileId',
  async initialExercise => {
      const response = await client.post(
        `http://localhost:9000/profile/${profileId}/addExercise`,initialExercise
      )
      return response.data
  }
)

export const deleteRecord = (profileId) =>  () => createAsyncThunk(
  '/profile:profileId',
  async initialExercise => {
      const response = await client.post(
          `http://localhost:9000/profile/${profileId}/deleterecord`,initialExercise
      )
      return response.data
  }
)
export default profilesSlice.reducer;