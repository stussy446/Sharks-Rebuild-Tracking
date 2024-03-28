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
    const id = Number(req.params.id);
    const foundPlayer = players.find((player) => player.id === id);
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
    const id = Number(req.params.id);
    const { name, team, position } = req.body;
    const foundPlayer = players.find((player) => player.id === id);
    if (!foundPlayer) {
      throw new Error('player not found');
    }

    (foundPlayer.name = name || foundPlayer.name),
      (foundPlayer.team = team || foundPlayer.team),
      (foundPlayer.position = position || foundPlayer.position),
      res.status(201).json({
        status: 'success',
        foundPlayer,
        players,
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
    const id = Number(req.params.id);
    const foundPlayer = players.find((player) => player.id === id);
    if (!foundPlayer) {
      throw new Error('player not found');
    }

    players = players.filter((player) => player.id != id);

    res.status(201).json({
      status: 'success',
      players,
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error.message,
    });
  }
};
