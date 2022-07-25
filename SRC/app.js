const express = require('express');
const userRouter = require('./users/users.router').router;

const app = express();

app.use(express.json());

app.use('/hola', (req, res) => {
    res.json({
        message: "Peticion con use"
    })
});

//? Las rutas de los usuarios
app.use('/api/v1', userRouter)

// app.get('/users', (req, res) => {
//     res.status(200).json(userDB);
// });
// app.get('/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const filteredDB = userDB.filter(item => item.id === id);
//     if (filteredDB.length > 0) {
//         res.status(200).json(filteredDB[0]);
//     }else{
//         res.status(400).json({message: 'Invalid id'});
//     }
// });

// app.post('/users', (req, res) => {
//     const data = req.body
//     if(userDB.length === 0){
//         const newUser = {
//             id: 1,
//             ...data
//         };
//         userDB.push(newUser);
//     }else{
//         const newUser = {
//             id: userDB[userDB.length - 1].id + 1,
//             ...data
//         };
//         userDB.push(newUser)
//     }
//     res.status(201).json(userDB);
// })

// //! Controlador
// const createUser = (userObj) => {
//     if(userDB.length === 0){
//         const newUser = {
//             id: 1,
//             ...data
//         };
//         userDB.push(newUser);
//     }else{
//         const newUser = {
//             id: userDB[userDB.length - 1].id + 1,
//             ...data
//         };
//         userDB.push(newUser)
//     }
// }

// app.delete('/users/:id', (req, res) => {
//     const id = Number(req.params.id)
//     const index = userDB.findIndex(item => item.id === id);
//     console.log(index);
//     if (index !== -1) {
//         userDB.splice(index, 1);
//         res.status(204).json();
//     }else{
//         res.status(400).json({ error: 'Not Found id' });
//     }
// })

// app.put('/users/:id', (req, res) => {
//     const id = Number(req.params.id)
//     const data = req.body
//     const index = userDB.findIndex(item => item.id === id);

//     if (index === -1) {
//         res.status(400).json({ error: 'Not Found id' });
//     }

//     if(data.name && data.age && data.email && data.country && data.phone) {
//         userDB[index] = {
//             id,
//             name: data.name,
//             age: data.age,
//             email: data.email,
//             country: data.country,
//             phone: data.phone
//         };
//         res.status(200).json(userDB);
//     }else{
//         res.status(400).json({message: 'Missing data'});
//     }
// });



app.listen(8000, () => {
    console.log('Server listening on port 8000');
});