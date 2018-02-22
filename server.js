const hapi = require('hapi')
const socketIO = require('socket.io')

const server = hapi.server({
  port: 8080,
})

const io = socketIO(server.listener)

io.on('connection', () => {
  console.log('new-connection')
  io.emit('new-connections', {
    time: new Date(),
  })
})

server.route({
  method: 'GET',
  path: '/',
  handler: () => (
    'jelou'
  ),
})

async function start() {
  try {
    await server.start()
  } catch (error) {
    console.error(error)
  }

  console.log('Server listening on port 8080')
}

start()
