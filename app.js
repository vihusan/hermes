const server = require('./models/server.model');

require('dotenv').config();

const serve = new server();
serve.listen()
