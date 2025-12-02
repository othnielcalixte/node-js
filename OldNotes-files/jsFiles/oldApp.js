const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug'); // we are telling express we want to compile dynamic templates with the pug engine
app.set('views', 'views'); // Here we are telling it where to go find these templates

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//Parsing middleware - created before your other middleware because parsing should be done everywhere if needed
app.use(bodyParser.urlencoded({ extended: false })); // this will call next in the end, but it will parse the body for us

app.use(express.static(path.join(__dirname, 'public'))); //this is will make it so we can give read access to folder

// app.use('/admin', adminRoutes); // you put part of the file path here so you don't have to repeat it in the admin file

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
