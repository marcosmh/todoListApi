var express = require('express');
//const { default: mongoose } = require('mongoose');
app = express();
port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModels');

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.liste(port);

console.log('todoListapp started on port:' + port);