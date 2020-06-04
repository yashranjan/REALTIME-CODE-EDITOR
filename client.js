// Configure ace editor for JS
const editor = ace.edit('editor');
editor.setTheme('ace/theme/monokai');
editor.getSession().setMode('ace/mode/javascript');

// Make a new socket.io connection to localhost:3000
const socket = io('http://localhost:3000');
// A variable use to stop the onchange event
let silent = true;
// Attach an onchange event handler and send data via socket to all connected clients
editor.session.on('change', (e) => {
	if (silent) {
		socket.send(editor.getValue());
	}
});
// Triggers when a new message arrived via socket from any client
socket.on('message', (data) => {
	silent = false;
	editor.setValue(data);
	silent = true;
});
