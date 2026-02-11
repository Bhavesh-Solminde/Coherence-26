/**
 * Wraps an async route handler to forward errors to Express error middleware.
 * Eliminates repetitive try/catch blocks in every controller.
 *
 * @param {Function} fn - Async Express route handler
 * @returns {Function}
 */
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
