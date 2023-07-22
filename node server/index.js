//Node server who handle socket io connection
const io =require('socket.io')(5500)
const users={};

io.on('connection', socket =>{
    socket.on('new-user-joined',name =>{
        console.log("New-User",name);
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
    });
    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message: message,name: users[socket.id]})
    });
})