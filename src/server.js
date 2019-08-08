const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();
mongoose.connect('mongodb+srv://root:root@cluster-cqc0y.mongodb.net/tindev?retryWrites=true&w=majority',  {useNewUrlParser: true});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);