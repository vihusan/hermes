const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const { dbConnection } = require('../database/config');

class server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.pathUsuarios = '/hermes/usuarios';
        this.connDB();
        this.middlewares();
        this.routes();
    }

    async connDB() {
        await dbConnection();
    }

    middlewares() {
        // Directorio publico
        this.app.use(express.static('public'));

        //Lectura y parseo de entrada
        this.app.use(express.json());

        //Pintar las peticiones a servidor
        this.app.use(morgan('dev'));

        // Evitar problemas CORS con restserver al ser consumido por frontend
        this.app.use(cors());
    }

    routes() {
        this.app.use(this.pathUsuarios, require('../routes/usuarios.route'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("rest escuchando por ", this.port);
        });
    }
}

module.exports = server;

