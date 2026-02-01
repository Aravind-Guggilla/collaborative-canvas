const express = require('express')
const http = require('http')
const {Server} = require('socket.io')

const app = express()
const server = http.createServer(app)




// STEP-2 UPDATE (safety):
// Allow socket connections from React app (different port)
const io = new Server(server, {
  cors: {
    origin: '*',
  }
})

io.on('connection', socket => { // this function is used to connection established with a client
  console.log('A user connected', socket.id)
  // and socket.id is a unique identifier for each client
  // whatever client sends data to sever using this socket connection
  // we can use this socket connection to send data back to that specific client inside this function only
  // And make futher connections with other clients using this same function

  // STEP-3 UPDATE:
  // Receive drawing data from one client
  socket.on('draw-segment', data => {
    // STEP-3 UPDATE:
    // Broadcast drawing data to all OTHER clients
    socket.broadcast.emit('draw-segment', data) // broadcast.emit sends data to all clients except the sender
    // drw-segment is the event name by which other clients will listen to receive the drawing data
  })



  socket.on('disconnect', () => {
    console.log('A user disconnected', socket.id)
  })
})

app.get('/', (req, res) => {
  res.send('Hello from Socket.io server')
  console.log(req.query)
})

server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000')
})
