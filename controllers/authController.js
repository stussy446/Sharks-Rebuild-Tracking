import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';

// **************
// NOTE:, I am utilizing the express-async-errors package (imported in server.js) which essentially handles try catch behind the scenes,
// so that is why we aren't seeing try/catch in this file.
// **************

// *************
// See files in middleware folder to see code for how errors/validation is handled outside of this controller
// *************

// Register
export const register = async (req, res) => {
  const user = await User.create(req.body);

  res.status(StatusCodes.OK).json({
    status: 'success',
    user,
  });
};

//login
export const login = async (req, res) => {
  res.status(StatusCodes.OK).json({
    status: 'success',
    message: 'This is the login placeholder',
  });
};
