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

app.listen(8000, () => {
    console.log('Server listening on port 8000');
});