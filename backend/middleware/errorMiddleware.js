const notFound = (req, res, next) => {
  const error = new Error(`URL not found: ${req.originalURL}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = 200 ? 500 : res.statusCode;
  let message = err.message;

  // Checking for mongoose invalid objectID
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    message = `Resource not found`;
    statusCode = 404;
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? 'Works' : err.stack,
  });
};

export { notFound, errorHandler };
