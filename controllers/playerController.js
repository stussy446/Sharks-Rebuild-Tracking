import express from 'express';

export const getAllPlayers = async (req, res) => {
  res.status(201).json({
    status: 'success',
    message: 'good job dude',
  });
};
