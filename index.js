const jsonServer = require('json-server');
const path = require('path');

const port = process.env.PORT || 3030;

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log('Server is running')
});