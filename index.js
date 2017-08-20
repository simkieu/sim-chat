var Peer = require('simple-peer'),
    peer = new Peer({
        initiator: location.hash === '#init',
        trickle: false
    }),
    // express = require('express'),
    app = express(),
    // server = require('http').createServer(app),
    // io = require('socket.io').listen(server),
    users = [],
    connections = [];
peer.on('signal', function(data) {
    document.getElementById('yourID').value = JSON.stringify(data);
})
// app.use(express.static('styles'));
// app.use("/styles", express.static(__dirname + "/styles"));
console.log('Server running...');
// server.listen(process.env.PORT || 3000);
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
