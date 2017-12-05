const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();

const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + '/../public'));

const userList = [];
const userTotal = () => userList.length;
const connectionsMessage = () => `users: ${userTotal()}`;

io.on('connection', socket => {
  console.log(connectionsMessage());

  socket.on('join', data => {
    addUser(data);
    console.log(connectionsMessage());
    console.log(userList);

    socket.join('room-' + data.room);

    socket.broadcast
      .to('room-' + data.room)
      .emit('userJoined', `${data.user} joined the room`);
  });

  // socket.on('sendMessage', (newMessage, cb) => {
  //   console.log('new message', newMessage);
  //
  //   socket.broadcast.emit('newMessage', {
  //     from: `user${userTotal()}`,
  //     message: 'thank you for listening to my story'
  //   });
  //   cb('ok');
  // });

  socket.on('disconnect', () => {
    console.log(connectionsMessage());
  });
});

const addUser = obj => {
  if (obj.user === userList[0]) {
    userList.shift();
  } else {
    for (let i in userList) {
      if (obj.user === userList[i]) {
        userList.splice(i, i);
      }
    }
  }

  userList.push(obj.user);
};

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
