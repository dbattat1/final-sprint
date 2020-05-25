const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getUser, getUsers, deleteUser, updateUser, getUsersByCity} = require('./user.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/city/:id', getUsersByCity)
router.get('/', getUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)
// router.delete('/:id', deleteUser)

module.exports = router