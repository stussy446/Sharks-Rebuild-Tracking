import { nanoid } from 'nanoid';

let players = [
  {
    id: nanoid(),
    name: 'Steve Rector',
    team: 'San Jose Sharks',
    position: 'Left Wing',
  },
  {
    id: 2,
    name: 'Dildo Baggins',
    team: 'San Jose Barracude',
    position: 'Center',
  },
];

// GET ALL PLAYERS
export const getAllPlayers = async (req, res) => {
  try {
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
