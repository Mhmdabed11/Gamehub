var restify = require('restify');
var userApi = require('./user-api');

var server = restify.createServer();

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.post('/login', userApi.checkUserExists, userApi.checkCorrectPassword);
server.post('/signup', userApi.checkUserExists, userApi.addUser);

server.listen(8888, function() {
    console.log('%s listening at %s', server.name, server.url);
});