const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
    day: {
      type: Date,
      unique: true
    },
    exercises: [
      {
        type: Schema.Types.ObjectId,
        ref: "workoutType"
      }
    ]
  });

const workoutTypesSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: true,
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },
    duration: {
        type: Number,
        unique: true,
        required: true,
      },
    weight: {
        type: Number,
        unique: true,
        required: false,
      },
    reps: {
        type: Number,
        unique: true,
        required: false,
      },
    sets: {
        type: Number,
        unique: true,
        required: false,
      },
    distance: {
        type: Number,
        unique: true,
        required: false,
      },
});


const Workouts = mongoose.model("Workouts", workoutsSchema);
const Types = mongoose.model("Types", workoutTypesSchema);

module.exports = { Workouts, Types }
