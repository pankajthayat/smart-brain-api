const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const mysql =require('mysql');
const morgan = require('morgan');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

// const db = knex({
//   client: 'mysql',
//   connection: {
//     host : '127.0.0.1',
//     user : 'root',
//     password : 'pankaj',
//     database : 'smartbrain'
//   }
// });
console.log(process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD);
console.log(process.env.POSTGRES_DB, process.env.POSTGRES_HOST)

const db = knex({
  client: 'pg',
  connection: {
    host : process.env.POSTGRES_HOST, //'127.0.0.1',
    user : process.env.POSTGRES_USER,//'postgres',
    password : process.env.POSTGRES_PASSWORD,//'pankaj',
    database : process.env.POSTGRES_DB//'smartbrain'
  }
});

const app = express();

console.log("hey");

app.use(morgan('combined'));
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> { res.send("its working") })
app.get('/help', (req, res)=> { res.send("<h1>Help page </h1>") })
app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db)})
app.put('/image', (req, res) => { image.handleImage(req, res, db)})
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)})

app.listen(8085, ()=> {
  console.log('app is running on port 8085');
})
