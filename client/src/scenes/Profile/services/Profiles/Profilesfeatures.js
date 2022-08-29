import { createSlice } from "@reduxjs/toolkit"

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
        {id :2,date: "2018, 10, 22",weight:'55kg',time:3.300000},
        {id :3,date: "2018, 11, 22",weight:'60kg',time:180000}]},
        {exid:3,work:[{id :0 ,date: "2018, 8, 22",averageHeartRate:'150bpm',time:180000,level:"3"},
        {id :1,date: "2018, 8, 22",averageHeartRate:'162bpm',time:180000,level:"4"},
        {id :2,date: "2018, 10, 22",averageHeartRate:'164bpm',time:3.300000,level:"4"},
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
        {id :2,date: "2018, 10, 22",weight:'55kg',time:3.300000},
        {id :3,date: "2018, 11, 22",weight:'60kg',time:180000}]},
        {exid:3,work:[{id :0 ,date: "2018, 8, 22",averageHeartRate:'150bpm',time:180000,level:"3"},
        {id :1,date: "2018, 8, 22",averageHeartRate:'162bpm',time:180000,level:"4"},
        {id :2,date: "2018, 10, 22",averageHeartRate:'164bpm',time:3.300000,level:"4"},
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
        {id :2,date: "2018, 10, 22",weight:'55kg',time:3.300000},
        {id :3,date: "2018, 11, 22",weight:'60kg',time:180000}]},
        {exid:3,work:[{id :0 ,date: "2018, 8, 22",averageHeartRate:'150bpm',time:180000,level:"3"},
        {id :1,date: "2018, 8, 22",averageHeartRate:'162bpm',time:180000,level:"4"},
        {id :2,date: "2018, 10, 22",averageHeartRate:'164bpm',time:3.300000,level:"4"},
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
            {id :2,date: "2018, 10, 22",weight:'55kg',time:3.300000},
            {id :3,date: "2018, 11, 22",weight:'60kg',time:180000}]},
            {exid:3,work:[{id :0 ,date: "2018, 8, 22",averageHeartRate:'150bpm',time:180000,level:"3"},
            {id :1,date: "2018, 8, 22",averageHeartRate:'162bpm',time:180000,level:"4"},
            {id :2,date: "2018, 10, 22",averageHeartRate:'164bpm',time:3.300000,level:"4"},
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
                {id :2,date: "2018, 10, 22",weight:'55kg',time:3.300000},
                {id :3,date: "2018, 11, 22",weight:'60kg',time:180000}]},
                {exid:3,work:[{id :0 ,date: "2018, 8, 22",averageHeartRate:'150bpm',time:180000,level:"3"},
                {id :1,date: "2018, 8, 22",averageHeartRate:'162bpm',time:180000,level:"4"},
                {id :2,date: "2018, 10, 22",averageHeartRate:'164bpm',time:3.300000,level:"4"},
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
        }
    }
})

export const { ProfileAdded } = profilesSlice.actions

export default profilesSlice.reducer;