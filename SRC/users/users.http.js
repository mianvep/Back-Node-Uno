const {createUser, getUsersById, getAllUsers, deleteUser, editUser} = require('./users.controllers')

const getAll = (req, res) => {
    const data = getAllUsers()
    res.status(200).json({
        items: data.length,
        response: data
    })
};

const getById = (req, res) => {
    const id = Number(req.params.id)

    if(id) {
        const data = getUsersById(id)
        if(data.id) {
            res.status(200).json(data)
        }else {
            res.status(404).json({message: 'Invalid id'})
        }
    }else {
        res.status(400).json({message: 'Id is not a number'})
    }
}

const deleteById = (req, res) => {
    const id = Number(req.params.id);
    if(typeof id === 'number'){
        const deleted = deleteUser(id);
        if(deleted) {
            res.status(204).json();
        }else{
            res.status(404).json({message: 'Try with another id'});
        }
    }else {
        res.status(400).json({message: 'Invalid id'})
    }
}

const create = (req, res) => {
    const data = req.body;
    if(data.name && data.task && data.end) {
        const response = createUser(data)
        res.status(201).json(response)
    }else {
        res.status(400).json({message: 'Invalid arguments'});
    }
};

const update = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    if(data.name && data.task && data.end) {
        const response = editUser(id, data)
        res.status(201).json({message: 'Edited successfully', data: response});
    }else {
        res.status(400).json({message: 'Invalid arguments'});
    }
};

module.exports = {
    getAll,
    getById,
    deleteById,
    update,
    create
}