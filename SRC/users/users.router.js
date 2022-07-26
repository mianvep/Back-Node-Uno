const router = require('express').Router()
const httpUsers = require('./users.http')

router.route('/users')
    .get(httpUsers.getAll)
    // .post()

router.route('/users/:id')
    .get(httpUsers.getById)
    .put(httpUsers.update)
    .delete(httpUsers.deleteById)

    module.exports = {
        router
    }