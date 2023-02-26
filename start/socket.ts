import Ws from 'App/Services/Ws'
Ws.boot()

/**
 * Listen for incoming socket connections
 */
Ws.io.on('connection', (socket) => {
  console.log(`New Socket: ${socket.id}`)

  // socket.emit('pay_1729294668712522', { isPayed: false })

  socket.on('my other event', (data) => {
    console.log(data)
  })
})
