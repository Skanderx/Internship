const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const path = require("path");
const { isLink } = require("../utilities/isLink")
const {v1 : uuidv1} = require('uuid');

const exerciseSchema = new Schema({
    id: String,
    name: String,
    type: [String],
    picture: String
})

const Exercise = mongoose.model("exercise", exerciseSchema);

const allExercises = async () => {
    const existingExercises = await Exercise.findOne({});
    if (existingExercises) {
      return existingExercises;
    } else {
      return { error: "Exercises doesn't exist" };
    }
  };
  
  const createExercise = async (exercise) => {
      try {
        let newExerciseData = {
           id: uuidv1(),
           name: exercise.name,
           type: exercise.type,
           picture: exercise.picture,
        };
        const newExercise = new Exercise(newExerciseData);
        await newExercise.save();
      } catch (err) {
        return { error: "An error occured while creating your exercise " + err };
      }
      return { message: "Exercise has been successfully created" };
  };

module.exports = {
    Exercise,
    createExercise,
    allExercises,
  };