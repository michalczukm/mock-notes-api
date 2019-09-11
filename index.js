const jsonServer = require('json-server');
const path = require('path');
const bodyParser = require('body-parser');

const auth = require('./auth');

const port = process.env.PORT || 3030;

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(bodyParser.json());

// handle adding createdOn date to all (not all has it but, oh well)
server.use((request, _, next) => {
    if (request.method === 'POST') {
        request.body.createdOn = new Date()
    }

    next();
});

server.post('/v2/login', (request, response) => {
    const {username, password} = request.body;

    if (auth.isAuthenticated(username, password)) {
        response.json({
            name: 'Admin Admin',
            token: auth.generateJWTToken()
        });
    } else {
        response.sendStatus(400);
    }
});

/**
 * Only v2 routes need authorization
 */
server.use(/^\/v2\/.*$/, (request, response, next) => {
    if (auth.isAuthorized(request)) {
        next();
    } else {
        response.sendStatus(401);
    }
});

// v2 use same resources as not prefix version, but requires authorization
server.use('/v2', router);

server.use(router);

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});