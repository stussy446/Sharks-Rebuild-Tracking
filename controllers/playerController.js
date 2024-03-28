import Player from '../models/Player.js';

// **************
// NOTE, I am utilizing the express-async-errors package (imported in server.js) which essentially handles try catch behind the scenes,
// so that is why we aren't seeing try/catch in this file
// **************

// GET ALL PLAYERS
export const getAllPlayers = async (req, res) => {
  const players = await Player.find();

  res.status(201).json({
    status: 'success',
    players: players,
  });
};

// CREATE PLAYER
export const createPlayer = async (req, res) => {
  const newPlayer = await Player.create(req.body);

  res.status(201).json({
    status: 'success',
    newPlayer: newPlayer,
  });
};

// GET A PLAYER
export const getPlayer = async (req, res) => {
  const foundPlayer = await Player.findById(req.params.id);
  if (!foundPlayer) throw new Error('player not found');

  res.status(201).json({
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
  if (!player) throw new Error('player not found');

  res.status(201).json({
    status: 'success',
    player: player,
  });
};

// DELETE PLAYER
export const deletePlayer = async (req, res) => {
  const player = await Player.findByIdAndDelete(req.params.id, {
    runValidators: true,
  });

  if (!player) throw new Error('player not found');

  res.status(200).json({
    status: 'successful deletion',
    player,
  });
};
