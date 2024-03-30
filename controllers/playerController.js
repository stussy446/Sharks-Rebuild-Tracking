import Player from '../models/Player.js';
import { StatusCodes } from 'http-status-codes';

// **************
// NOTE:, I am utilizing the express-async-errors package (imported in server.js) which essentially handles try catch behind the scenes,
// so that is why we aren't seeing try/catch in this file.
// **************

// *************
// See files in middleware folder to see code for how errors/validation is handled outside of this controller
// *************

// GET ALL PLAYERS
export const getAllPlayers = async (req, res) => {
  const players = await Player.find();

  res.status(StatusCodes.OK).json({
    status: 'success',
    players: players,
  });
};

// CREATE PLAYER
export const createPlayer = async (req, res) => {
  const newPlayer = await Player.create(req.body);

  res.status(StatusCodes.CREATED).json({
    status: 'success',
    newPlayer: newPlayer,
  });
};

// GET A PLAYER
export const getPlayer = async (req, res) => {
  const foundPlayer = await Player.findById(req.params.id);

  res.status(StatusCodes.OK).json({
    status: 'success',
    foundPlayer,
  });
};

// UPDATE PLAYER
export const updatePlayer = async (req, res) => {
  const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({
    status: 'success',
    player: player,
  });
};

// DELETE PLAYER
export const deletePlayer = async (req, res) => {
  const player = await Player.findByIdAndDelete(req.params.id, {
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({
    status: 'successful deletion',
    player,
  });
};
