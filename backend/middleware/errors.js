// 404 not found
export const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Main error handler
export const errorsHandler = (error, req, res, next) => {
  const statusCode = res.statusCode == 200 ? 500 : res.statusCode; //Sometimes errors come with 200 status so we change it to a 500 by default
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV !== "production" ? error.stack : null,
  });
};
