//Initialise HTTP Server, socket.io and port number
const http = require('http').createServer();
const io = require('socket.io')(http);
const port = 3000;

//Listen for http request on PORT
http.listen(port, () => {
	console.log(`Server listening on port: ${port}`);
});

//Triggered when a new client connects
io.on('connection', (socket) => {
	console.log('Connected');
	socket.on('message', (msg) => {
		socket.broadcast.emit('message', msg);
	});
});

//Triggered when a client disconnects
io.on('disconnect', (evt) => {
	console.log(evt);
	console.log('Some people left');
});
