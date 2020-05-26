const orderService = require('./order.service')
const logger = require('../../services/logger.service')

async function getOrder(req, res) {
    const order = await orderService.getById(req.params.id)
    res.send(order)
}
  
async function getOrderBySeller(req, res) {
    const order = await orderService.queryBySeller(req.params.id)
    res.send(order)
}
async function getOrderByBuyer(req, res) {
    const order = await orderService.queryByBuyer(req.params.id)
    res.send(order)
}

async function deleteOrder(req, res) {
    await orderService.remove(req.params.id)
    res.end()
}

async function updateOrder(req, res) {
    const order = req.body;
    await orderService.update(order)
    res.send(order)
}

module.exports = {
    getOrder,
    getOrderBySeller,
    getOrderByBuyer,
    deleteOrder,
    updateOrder,
}