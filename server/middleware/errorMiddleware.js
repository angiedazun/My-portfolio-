/**
 * Centralized Error Handling Middleware
 * Catches and formats errors consistently
 */

// 404 Not Found Handler
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Global Error Handler
export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
  res.status(statusCode).json({
    success: false,
    message: err.message,
    error: process.env.NODE_ENV === 'production' ? null : {
      stack: err.stack,
      statusCode,
    },
  });
};
