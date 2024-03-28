import { nanoid } from 'nanoid';

let players = [
  {
    id: nanoid(),
    name: 'Steve Rector',
    team: 'San Jose Sharks',
    position: 'Left Wing',
  },
  {
    id: nanoid(),
    name: 'Dildo Baggins',
    team: 'San Jose Barracude',
    position: 'Center',
  },
];

export const getAllPlayers = async (req, res) => {
  res.status(201).json({
    status: 'success',
    players: players,
  });
};

export const createPlayer = async (req, res) => {
  res.status(201).json({
    status: 'success',
    players: players,
  });
};
