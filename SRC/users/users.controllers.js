const e = require("express");

const userDB = [
    {   
        id: 1,
        name: "",
        task: "",
        end: ""
    }
];

/*
    {   
        id: 1,
        name: "",
        age: 20,
        email: "",
        country: "",
        phone: "",
    }
*/

//? Controlador para retornar los usuarios
const getAllUsers = () => {
    return userDB
}

const getUsersById = (id) => {
    const filteredDB = userDB.filter(user => user.id === id);
    return filteredDB[0];
}

const createUser = (userObj) => {
    if(userDB.length === 0) {
        const newUser = {
            id: 1,
            name: userObj.name,
            task: userObj.task,
            end: userObj.end
        }
        userDB.push(newUser);
        return newUser;
    }
    const newUser = {
        id: 1,
        name: userObj.name,
        task: userObj.task,
        end: userObj.end
    }
    userDB.push(newUser);
    return newUser;
}

const deleteUser = (id) => {
    const index = userDB.findIndex(item => item.id === id);
    if(index !== -1) {
        userDB.splice(index, 1);
        return true;
    }
}

const editUser = (id, data) => {
    const index = userDB.findIndex(item => item.id === id);
    if(index !== -1) {
        userDB[index] = data;
        return userDB[index];
    }else {
        createUser(data)
        return userDB.at(-1);
    }
}

module.exports = {
    getAllUsers,
    getUsersById,
    createUser,
    deleteUser,
    editUser
}


