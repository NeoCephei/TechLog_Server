# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku main
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)


# TechLog_Server
![MadeWith](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)

TechLog is a react native project, aimed for starter programmers looking to improve their knowledge in Js essentials such clousures, scopes and more in test format using real code.

## Getting Started

### 1. Clone the repo locally
This repo is only the server but you will need to fork/clone client and server to make the app run.
We are currently looking for a full deployment to allow anyone to use it.
Nowadays only the server can be deployed using heroku.

Use `git clone <Your Prefered Method>` from [Client Repo](https://github.com/NeoCephei/TechLog_Native)

Use `git clone <Your Prefered Method>` from [Server Repo](https://github.com/NeoCephei/TechLog_Server)

### 2. Install dependencies
Open the repo and run `npm install`

### 3. Add Enviromental Variables
Within the folder there is an `example.env` file. Copy the variables from that file, paste them on a new `.env` file that you will create locally and fill the variables with your local corresponding values.

### 4. Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the server in the development mode in the predefined port.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

#### `heroku ps:scale web=1`

Opens the deployed server

#### `heroku ps:scale web=0`

Closes the deployed server.
The server will close for inactivity if it doesnt recieve any call or change in less than 30 minutes.

## ⚡ Tech stack
<details>
 <summary><b>Client</b></summary> 
 
  ![Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
  ![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
 
 </details>
 
<details>
 <summary><b>Server</b></summary>
 
 ![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
 ![NodeJs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
 ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
 ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
</details>




