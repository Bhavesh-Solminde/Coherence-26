import { User } from '../models/index.js';
import { ApiError } from '../utils/index.js';

/**
 * Get all users (admin use-case).
 */
export const getAllUsers = async () => {
  return User.find().select('-__v');
};

/**
 * Get a single user by ID.
 */
export const getUserById = async (id) => {
  const user = await User.findById(id).select('-__v');
  if (!user) throw new ApiError(404, 'User not found');
  return user;
};

/**
 * Update a user by ID.
 */
export const updateUser = async (id, updateData) => {
  const user = await User.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  }).select('-__v');

  if (!user) throw new ApiError(404, 'User not found');
  return user;
};

/**
 * Delete a user by ID.
 */
export const deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);
  if (!user) throw new ApiError(404, 'User not found');
  return user;
};
