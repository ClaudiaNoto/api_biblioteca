const express = require('express');
const app = express();

const librosRouter = require('./routes/libros.js');

const errorHandler = require('./middleware/errorHandler.js');

app.use('/libros', librosRouter);
app.use(errorHandler);

app.listen(3000, () => {
    console.log("servidor iniciado en el puerto 3000");
});


