//Initialise HTTP Server, socket.io and port number
const http = require('http').createServer();
const io = require('socket.io')(http);
const port = 3000;

http.listen(port, () => {
	console.log(`Server listening on port: ${port}`);
});

io.on('connection', (socket) => {
	console.log('Connected');
	socket.on('message', (msg) => {
		socket.broadcast.emit('message', msg);
	});
});

io.on('disconnect', (evt) => {
	console.log(evt);
	console.log('Some people left');
});
