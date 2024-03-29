import Player from '../models/Player.js';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../errors/customError.js';

// **************
// NOTE, I am utilizing the express-async-errors package (imported in server.js) which essentially handles try catch behind the scenes,
// so that is why we aren't seeing try/catch in this file
// **************

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
  const { id } = req.params;
  const foundPlayer = await Player.findById(id);

  if (!foundPlayer) throw new NotFoundError(`no player with id: ${id}`);

  res.status(StatusCodes.OK).json({
    status: 'success',
    foundPlayer,
  });
};

// UPDATE PLAYER
export const updatePlayer = async (req, res) => {
  const id = req.params.id;
  const player = await Player.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!player)
    return res.status(404).json({
      status: 'failed',
      message: `no player with id: ${id}`,
    });

  res.status(StatusCodes.OK).json({
    status: 'success',
    player: player,
  });
};

// DELETE PLAYER
export const deletePlayer = async (req, res) => {
  const id = req.params.id;
  const player = await Player.findByIdAndDelete(id, {
    runValidators: true,
  });

  if (!player)
    return res.status(404).json({
      status: 'failed',
      message: `no player with id: ${id}`,
    });

  res.status(StatusCodes.OK).json({
    status: 'successful deletion',
    player,
  });
};
