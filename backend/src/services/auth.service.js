import jwt from 'jsonwebtoken';
import { env } from '../config/index.js';
import { User } from '../models/index.js';
import { ApiError } from '../utils/index.js';

/**
 * Generate a signed JWT for a given user ID.
 */
const generateToken = (id) =>
  jwt.sign({ id }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN });

/**
 * Register a new user.
 * @returns {{ user: object, token: string }}
 */
export const registerUser = async ({ name, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(409, 'A user with that email already exists');
  }

  const user = await User.create({ name, email, password });

  return {
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
    token: generateToken(user._id),
  };
};

/**
 * Authenticate user with email & password.
 * @returns {{ user: object, token: string }}
 */
export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) {
    throw new ApiError(401, 'Invalid email or password');
  }

  return {
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
    token: generateToken(user._id),
  };
};

/**
 * Return the currently authenticated user's profile.
 */
export const getProfile = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new ApiError(404, 'User not found');
  return user;
};
