const express = require('express');
const app = express();
const expbs = require('express-handlebars');


app.engine('handlebars', expbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');


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
app.use('/bootswatch', express.static('node_modules/bootswatch/dist'));
app.use("/", express.static('static'));

