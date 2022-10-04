const http = require('http'); //use http module

const routes = require('./routes');   //import custom module

const server = http.createServer(routes.handler);

server.listen(3000);                                  