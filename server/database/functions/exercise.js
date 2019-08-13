const models = require('../models');

const Exercises = models.exercises;

exports.addExercise = (req, res) => {
  Exercises.findOne({
    where: {
      name: req.body.name
    }
  }).then((result) => {
    if (result) {
      res.status(400);
      res.json({ err: 'Existing exercise' });
    }
    
    const exercise = {
      name: req.body.name,
      part: req.body.part,
      tool: req.body.tool,
      avatar: req.body.avatar,
    };

    Exercises.create(exercise).then((success) => {
      res.status(200);
      res.json({ "success": "Exercise added" });
    }).catch((e) => {
      res.status(500);
      res.send(e);
    });
  }).catch((e) => {
		res.status(500);
		res.json({ err: e });
	});
};

exports.getExercise = (req, res) => {
  Exercises.findAll({
    order: [['name']],
  }).then((result) => {
    if (!result) {
      res.status(400);
      res.json({ err: 'Empty exercise list' });
    }

    res.status(200);
    res.json(result);
  }).catch((e) => {
		res.status(500);
		res.json({ err: e });
	});
}
