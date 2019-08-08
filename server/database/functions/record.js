const jwt = require('jsonwebtoken');
const secretJson = require('../secret.json');
const models = require('../models');

const Users = models.users;
const Records = models.records;
const Routines = models.routine;

const validateToken = (req, res) => {
  try {
    const result = jwt.verify(req.body.token, secretJson.secret);
    return result.verify.sub;
  } catch (e) {
    res.status(400);
    res.json({ err: e.message });
  }
};

exports.addRecord = (req, res) => {
  const uName = validateToken(req, res);

	Users.findOne({
		where: {
			username: uName,
		},
	}).then((data) => {
		if (!data) {
			res.status(400);
			res.json({ err: 'Non-existing user' });
		}

    const record = {
      user_id: data.id,
      date: req.body.date,
      exercise: req.body.exercise,
      sets: req.body.sets,
    };

    const routine = {
      user_id: data.id,
      name: req.body.name,
      remark: req.body.remark,
      exercise: req.body.exercise,
    };

    Routines.create(routine).then(() => {
      Records.create(record).then((success) => {
        res.status(200);
        res.json({ "success": "Exercises recorded" });
      }).catch((e) => {
        res.status(500);
        res.send(e);
      });
    }).catch((e) => {
      res.status(500);
      res.send(e);
    });
    
	}).catch((e) => {
		res.status(500);
		res.json({ err: e });
	});
};

exports.getRecord = (req, res) => {
  const uName = validateToken(req, res);

	Users.findOne({
		where: {
			username: uName,
		},
	}).then((data) => {
		if (!data) {
			res.status(400);
			res.json({ err: 'Non-existing user' });
    }

    Records.findAll({
      where: {
        date: req.body.date,
      },
    }).then((data) => {
      res.status(200);
      res.json(data);
    }).catch((e) => {
      res.status(500);
      res.json({ err: e });
    });
  }).catch((e) => {
		res.status(500);
		res.json({ err: e });
	});
}
