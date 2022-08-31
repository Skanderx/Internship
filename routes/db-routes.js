const dbRouter = require("express").Router();
const { allProfiles , findProfile , createProfile , deleterecord , addExercise , addRecord } = require("../models/profile-model");
const { allExercises, createExercise } = require("../models/exercise-model");

dbRouter.post("/createExercise", 
async (req, res) => {
  return await res.json(await createExercise(req.body)
  );
});

dbRouter.post("/createProfile", 
async (req, res) => {
  return await res.json(await createProfile(req.body)
  );
});

dbRouter.post("/searchexercises", 
async (req, res) => {
  return await res.json(await allExercises());
});

dbRouter.post("/searchprofiles", 
async (req, res) => {
  return await res.json(await allProfiles()
  );
});

dbRouter.get("/profile/:profileId", 
async (req, res) => {
  res.json({
    Profile : await findUser(req.params.profileId),
    Exercises : await allExercises()
  });
});

dbRouter.get("/profile/:profileId/deleterecord", 
async (req, res) => {
  res.json(await deleterecord(req.params.profileId,req.body));
});

dbRouter.get("/profile/:profileId/addExercise", 
async (req, res) => {
  res.json(await addExercise(req.params.profileId,req.body));
});

dbRouter.get("/profile/:profileId/addRecord", 
async (req, res) => {
  res.json(await addRecord(req.params.profileId,req.body));
});

module.exports = {
  dbRouter,
};
