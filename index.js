var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    users = [],
    connections = [];

console.log('Server running...');
server.listen(process.env.PORT || 3000);
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
