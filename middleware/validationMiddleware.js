import { body, param, validationResult } from 'express-validator';
import { BadRequestError, NotFoundError } from '../errors/customError.js';
import { PLAYER_POSITION } from '../utils/constants.js';
import mongoose from 'mongoose';
import Player from '../models/Player.js';

// function used in all oether validations in this file to make sure correct status code and message is thrown
const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => `${error.msg} `);
        if (errorMessages[0].startsWith('no player')) {
          throw new NotFoundError(errorMessages);
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

// Validates data passed through the body of a request
export const validatePlayerInput = withValidationErrors([
  body('firstName')
    .notEmpty()
    .withMessage('player must have first name')
    .isLength({ min: 2, max: 25 })
    .withMessage('first name must be between 2 and 25 characters')
    .trim(),
  body('lastName')
    .notEmpty()
    .withMessage('player must have last name')
    .isLength({ min: 2, max: 25 })
    .withMessage('last name must be between 2 and 25 characters')
    .trim(),
  body('position')
    .isIn(Object.values(PLAYER_POSITION))
    .withMessage('invalid position value'),
  body('team').notEmpty().withMessage('player must have a team'),
]);

// validates id from the parameters of a request
export const validateIdParam = withValidationErrors([
  param('id').custom(async (value) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError('invalid mongodb id');
    const foundPlayer = await Player.findById(value);

    if (!foundPlayer) throw new NotFoundError(`no player with id: ${value}`);
  }),
]);
