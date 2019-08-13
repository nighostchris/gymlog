const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const loginFunctions = require('./database/functions/login');
const tokenFunctions = require('./database/functions/token');
const recordFunctions = require('./database/functions/record');
const exerciseFunctions = require('./database/functions/exercise');
const registerFunctions = require('./database/functions/register');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.route('/api/v1/users')
	.post(registerFunctions.validate, registerFunctions.register);

app.route('/api/v1/token')
	.get(loginFunctions.login)
	.post(tokenFunctions.validateToken);

app.route('/api/v1/record')
	.post(recordFunctions.addRecord);

app.route('/api/v1/exercise')
	.get(exerciseFunctions.getExercise)
	.post(exerciseFunctions.addExercise);

app.listen(process.env.PORT || 3000, () => {
	console.log('API available on port 3000');
});
