
module.exports = connectSockets

function connectSockets(io) {
    io.on('connection', socket => {
        socket.on('makeOrder', (order) => {
            console.log('got order from backend', order);
            socket.emit('setOrders')
        }
        )
    })
}