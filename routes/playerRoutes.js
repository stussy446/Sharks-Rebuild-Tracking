import express from 'express';
import {
  getAllPlayers,
  createPlayer,
  getPlayer,
} from '../controllers/playerController.js';

const router = express.Router();

router.route('/').get(getAllPlayers).post(createPlayer);
router.route('/:id').get(getPlayer);

export default router;
