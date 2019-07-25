# GymLog

GymLog is a web-app for recording personal workout data and diet.

### Arch

This repo is basically seperated into 2 folders, server and client, which make use of :

* [Vue.js](https://vuejs.org/) - progressive framework for building frontend user interface
* [Node.js](https://nodejs.org/en/) - event driven Javascript runtime for building scalable network applications
* [Express](https://expressjs.com/) - minimalist web framework for Node.js
* [PostgreSQL](https://www.postgresql.org/) - open source relational database
* [Sequelize](http://docs.sequelizejs.com/) - promise-based Node.js ORM

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

### API route
Not Yet Finish

### Traps during development
1. When using vue-router, the VueRouter object created need to be named as router before passing it to Vue instance and make use of it. Otherwise "Uncaught TypeError: Cannot read property 'matched' of undefined" will appear.