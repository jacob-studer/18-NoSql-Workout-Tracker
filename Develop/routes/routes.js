const router = require("express").Router();
const Workouts = require("../models/workouts.js");
const path = require("path");

router.post("/api/workouts", ({ body }, res) => {
  Workouts.create(body)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/range", ({ body }, res) => {
  Workouts.insertMany(body)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workouts.find({})
    .sort({ date: -1 })
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// router.put("/exercise/id", (req, res) => {
//   db.workouts.insert({})
//     .populate("")
//     .then(workoutsdb => {
//       res.json(workoutsdb);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });


module.exports = router;
