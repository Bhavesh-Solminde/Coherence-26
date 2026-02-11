/**
 * Standardised JSON response helper.
 *
 * @param {import('express').Response} res
 * @param {number} statusCode
 * @param {object} data
 * @param {string} [message]
 */
const sendResponse = (res, statusCode, data = {}, message = 'Success') => {
  return res.status(statusCode).json({
    success: statusCode < 400,
    message,
    data,
  });
};

export default sendResponse;
