const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (error, req, res, next) => {
  const defaultError = {
    statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg:
      error.message ||
      `There was an internal server error, please try again later!`,
  };
  if (error.name == "SequelizeValidationError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = Object.values(error.errors)
      .map((item) => item.message)
      .join(", ");
  }
  res.status(defaultError.statusCode).json({
    msg: defaultError.msg,
  });
};

module.exports = { errorHandlerMiddleware };
