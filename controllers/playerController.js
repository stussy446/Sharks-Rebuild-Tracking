import Player from '../models/Player.js';

// GET ALL PLAYERS
export const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();

    res.status(201).json({
      status: 'success',
      players: players,
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error.message,
    });
  }
};

// CREATE PLAYER
export const createPlayer = async (req, res) => {
  try {
    const newPlayer = await { ...req.body };
    await Player.create(newPlayer);

    res.status(201).json({
      status: 'success',
      newPlayer: newPlayer,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error.message,
    });
  }
};

// GET A PLAYER
export const getPlayer = async (req, res) => {
  try {
    const foundPlayer = await Player.findById(req.params.id);
    if (!foundPlayer) throw new Error('player not found');

    res.status(201).json({
      status: 'success',
      foundPlayer,
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error.message,
    });
  }
};

// UPDATE PLAYER
export const updatePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!player) throw new Error('player not found');

    res.status(201).json({
      status: 'success',
      player: player,
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error.message,
    });
  }
};

// DELETE PLAYER
export const deletePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id, {
      runValidators: true,
    });

    if (!player) throw new Error('player not found');

    res.status(200).json({
      status: 'successful deletion',
      player,
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error.message,
    });
  }
};
