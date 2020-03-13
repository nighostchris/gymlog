# GymLog (Last Update: 8/8/2019 22:19)
---
[![Netlify Status](https://api.netlify.com/api/v1/badges/94d94cfc-2cbf-43df-8f42-35327ddb779b/deploy-status)](https://app.netlify.com/sites/dreamy-archimedes-5cd57a/deploys)

GymLog is a web-app for recording personal workout data and diet.

### Screenshots
![Home Page](https://i.imgur.com/EKew5uz.png)
![History Page](https://i.imgur.com/jo0NNz3.png)
![New Routine](https://i.imgur.com/Mxsx7vD.png)
![New Exercise](https://i.imgur.com/u9A2hmW.png)

### Urgent To-do
- [ ] Simple gym history view page 
- [ ] User management page
- [ ] Lot more.................

### Arch

This repo is basically seperated into 2 folders, server and client, which make use of :

* [Vue.js](https://vuejs.org/) - progressive framework for building frontend user interface
* [Node.js](https://nodejs.org/en/) - event driven Javascript runtime for building scalable network applications
* [Express](https://expressjs.com/) - minimalist web framework for Node.js
* [PostgreSQL](https://www.postgresql.org/) - open source relational database
* [Sequelize](http://docs.sequelizejs.com/) - promise-based Node.js ORM
* [Axios](https://github.com/axios/axios) - promise-based HTTP client for browser and node.js

### Installation
Global npm package required
```sh
> npm install @vue/cli sequelize-cli -g
```
One terminal for running the server
```sh
> cd gymlog/server
> npm install
> npm run start
```
Another terminal for running the client
```sh
> cd gymlog/client
> npm install
> npm run serve
```
Server deployment in heroku (Remember to put config.json and secret.json into dist)
```sh
> heroku login
> heroku git:remote <heroku_app_name>
> git checkout -b <new_branch_name>
> npm run local-build
> git subtree split --prefix=server -b <new_branch_name>
> git push -f heroku <new_branch_name>:master
```

### API route
---
#### 1. Users
##### Register
Register a user.

|Method|URL|
|------|---|
|POST|api/v1/users|

|Status|Response|
|------|--------|
| 200 |`{ "success": "User registered" }`|
| 400 |`{ "err": "Username not available" }`|
||`{ "err": "Minimum 8 characters" }`|
||`{ "err": "Must contain at least 1 number" }`|
||`{ "err": "First Name cannot be empty" }`|
||`{ "err": "Surname cannot be empty" }`|

#### 2. Tokens
##### Login
Login and obtain token.

|Method|URL|
|------|---|
|GET|api/v1/users|

|Status|Response|
|------|--------|
| 200 |`{ "token": <token> }`|
| 400 |`{ "err": "Invalid password" }`|
||`{ "err": "Non-existing user" }`|

##### Verify
Verify the token.

|Method|URL|
|------|---|
|POST|api/v1/users|

|Status|Response|
|------|--------|
| 200 |`{ "verify": { "iss": "gymlog-auth", "sub": "testing", "firstname": "test", "iat": 1565185005, "exp": 1565271405 } }`|
| 400 |`{ "err": <error provided by jwt> }`|
---

### Traps during development
1. When using vue-router, the VueRouter object created need to be named as router before passing it to Vue instance and make use of it. Otherwise "Uncaught TypeError: Cannot read property 'matched' of undefined" will appear.
2. Vue-router history mode will only work when the setting of server is correct. For Netlify case, we need to add the _redirect file.
3. The property of "publicPath: './'" needs to be set in vue.config.js in order for webpack to load js and css file into index.html corrctly