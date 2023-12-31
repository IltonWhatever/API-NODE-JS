import * as http from 'http';
import Api from './api/api';
import { errorHandlerApi } from './api/errorHandlerApi';

const config = require('./config/env/config')();


const server = http.createServer(Api);

Api.use(errorHandlerApi);

server.listen(config.serverPort, ()=> console.log('Serve esta presente na porta 3000'));