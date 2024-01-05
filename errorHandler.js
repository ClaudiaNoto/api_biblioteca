const errorHandler = (err,req, res, next) => {
    const statusCode = err.statusCode || 500;
    //contruir objeto de repsuesta de error
    const errorReponse = {
        error: {
            message: err.message || "error interno del servidor",
            code: err.code || "internal_error",
        },
    };
    //enviar respuesta de error en formato json
    res.status(statusCode).json(errorReponse)
};

module.exports = errorHandler;