import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { hashPassword } from '../utils/passwordUtils.js';

// **************
// NOTE:, I am utilizing the express-async-errors package (imported in server.js) which essentially handles try catch behind the scenes,
// so that is why we aren't seeing try/catch in this file.
// **************

// *************
// See files in middleware folder to see code for how errors/validation is handled outside of this controller
// *************

// Register
export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? 'admin' : 'user';

  // hashes password with bcrypt
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);

  res.status(StatusCodes.OK).json({
    status: 'success',
    message: 'user created',
  });
};

//login
export const login = async (req, res) => {
  res.status(StatusCodes.OK).json({
    status: 'success',
    message: 'This is the login placeholder',
  });
};
