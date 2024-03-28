import express from 'express';
import {
  getAllPlayers,
  createPlayer,
} from '../controllers/playerController.js';

const router = express.Router();

router.route('/').get(getAllPlayers).post(createPlayer);

export default router;
