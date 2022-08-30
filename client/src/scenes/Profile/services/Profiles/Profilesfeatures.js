import { createSlice } from "@reduxjs/toolkit"
import { deleterecord } from "../../scenes/view/services/Exercises/Exercises";

const initialState = [{
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
];

const profilesSlice = createSlice({
    name: 'Profiles',
    initialState: initialState,
    reducers : {
      ProfileAdded(state,action){
            state.push(action.payload)
      },
      ExerciseAdded(state,action){
            const foundIndex = state.findIndex(x => x.id ==action.payload.pid);
            const foundExIndex = state[foundIndex].exworkids.findIndex(x => x.exid ==action.payload.exid);
            (foundExIndex!==-1 ? 
              console.log("already added!") 
            : 
              state[foundIndex].exworkids.push({
                exid:action.payload.exid,
                work:[]
              })
            );
      },
      RemoveExercise(state,action){
        const foundIndex = state.findIndex(x => x.id ==action.payload.profileId);
        const foundExIndex = state[foundIndex].exworkids.findIndex(x => x.exid ==action.payload.exid);
        (foundExIndex!==-1 ?
          (state[foundIndex].exworkids)[foundExIndex].work=[]
          : console.log("no such exercise !")
        );
      },
      RecordAdded(state,action){
        const foundIndex = state.findIndex(x => x.id ==action.payload.pid);
        const foundExIndex = state[foundIndex].exworkids.findIndex(x => x.exid ==action.payload.exid);
        (foundExIndex!==-1 ? state[foundIndex].exworkids[foundExIndex].work.push(action.payload.obj)
        : console.log("no such exercise !"))
      },
      Deleterecord(state,action){
        const foundIndex = state.findIndex(x => x.id ==action.payload.profileId);
        const foundExIndex = state[foundIndex].exworkids.findIndex(x => x.exid ==action.payload.exid);
        let foundworkIndex =-1;
        (foundExIndex!==-1 ? 
        foundworkIndex = state[foundIndex].exworkids[foundExIndex].work.findIndex(x => x.id ==action.payload.workId) 
        : console.log("no such exercise !")
        );
        (foundworkIndex!==-1 ? state[foundIndex].exworkids[foundExIndex].work.splice(foundworkIndex,1)
        : console.log("no such record !")
        );
    
      }
    }
})

export const { ProfileAdded , ExerciseAdded , Deleterecord , RecordAdded , RemoveExercise} = profilesSlice.actions

export default profilesSlice.reducer;