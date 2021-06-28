const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
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
          required: true,
        },
      weight: {
          type: Number,
          required: false,
        },
      reps: {
          type: Number,
          required: false,
        },
      sets: {
          type: Number,
          required: false,
        },
      distance: {
          type: Number,
          required: false,
        },
      }
    ]
  });

// const workoutTypesSchema = new Schema({
//     type: {
//         type: String,
//         trim: true,
//         required: true,
//     },
//     name: {
//         type: String,
//         trim: true,
//         required: true,
//     },
//     duration: {
//         type: Number,
//         unique: true,
//         required: true,
//       },
//     weight: {
//         type: Number,
//         unique: true,
//         required: false,
//       },
//     reps: {
//         type: Number,
//         unique: true,
//         required: false,
//       },
//     sets: {
//         type: Number,
//         unique: true,
//         required: false,
//       },
//     distance: {
//         type: Number,
//         unique: true,
//         required: false,
//       },
// });


const Workout = mongoose.model("Workout", workoutSchema);
// const Types = mongoose.model("Types", workoutTypesSchema);

module.exports = Workout;
