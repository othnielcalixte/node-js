const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const formData = require('./routes/form');
const userRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(formData.routes);
app.use(userRoutes);

app.listen(3000);
