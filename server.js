require('dotenv').config();

const express = require('express');
const debug = require('debug')('app:server')
const path = require('path');
const app = express();
const expbs = require('express-handlebars');

const app = express();

app.engine('handlebars', expbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

app.use('/bootswatch', express.static('node_modules/bootswatch/dist'));
app.use("/", express.static('static'));

app.get('/', (req, res) => {
  res.render('index');
})
app.get('/index', (req, res) => {
  res.render('index');
})
app.get('/projects', (req,res) => {
  res.render('projects');
})
app.get('/contact_me', (req,res) => {
  res.render('contact_me');
})

const port = process.env.PORT || 3000;
app.listen(port, () => debug(`server started on port X{${port}}`))
