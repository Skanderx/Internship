const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const path = require("path");
const { isLink } = require("../utilities/isLink")
const {v1 : uuidv1} = require('uuid');

const profileSchema = new Schema({
    id: String,
    name: String,
    exworkids:[],
    gender: String,
    weight: String,
    height:Number,
    birthyear:Number,
    description: String,
    picture: String
})

const Profile = mongoose.model("profile", profileSchema);

const allProfiles =async () => {
  Profile.findOne({})
  .then(data => {
    done(null,data);
  })
   .catch(err => {
     return { error: err }
  });
}

const findProfile = async (id) => {
  Profile.findOne({ id: id })
  .then(data => {
     done(null,data);
   })
    .catch(err => {
      return { error: err }
   });
};
  
const createProfile = async (profile) => {
      try {
        let newProfileData = {
           id: uuidv1(),
           name: profile.name,
           exworkids:[],
           gender: profile.gender,
           weight: profile.weight,
           height:profile.height,
           birthyear:profile.birthyear,
           description: profile.description,
           picture: profile.picture,
        };
        console.log(newProfileData);
        const newProfile = new Profile(newProfileData);
        await newProfile.save();
      } catch (err) {
        return { error: "An error occured while creating your profile " + err };
      }
      return { message: "Profile has been successfully created" };
  };
const  deleterecord = async (id,record) => {
  findProfile(id, (err,data) => {
    const foundExIndex = data.exworkids.findIndex(x => x.exid == record.exid);
    const foundworkIndex = data.exworkids[foundExIndex].work.findIndex(x => x.id == record.workId);
    data.exworkids[foundExIndex].work.splice(foundworkIndex,1);
    data.save()
    .then(updatedProfile => {
    done(null,updatedProfile);
    })
    .catch(err => {
      console.error(err)
    });
  }
  );
}
const  addExercise = async (id,exercice) => {
  findProfile(id, (err,data) => {
    const foundExIndex = data.exworkids.findIndex(x => x.exid == exercice.exid);
    data.exworkids.push(
      {
      exid:exercice.exid,
      work:[]
    }
    )
    data.save()
    .then(updatedProfile => {
    done(null,updatedProfile);
    })
    .catch(err => {
      console.error(err)
    });
  }
  );
}
const  addRecord = async (id,record) => {
  findProfile(id, (err,data) => {
    const foundExIndex = data.exworkids.findIndex(x => x.exid == record.exid);
    data.exworkids[foundExIndex].work.push(record.obj);
    data.save()
    .then(updatedProfile => {
    done(null,updatedProfile);
    })
    .catch(err => {
      console.error(err)
    });
  }
  );
}
module.exports = {
    Profile,
    allProfiles,
    createProfile,
    findProfile,
    deleterecord ,
    addExercise , 
    addRecord
  };