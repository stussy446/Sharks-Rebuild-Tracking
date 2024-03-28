import express from 'express';
import {
  getAllPlayers,
  createPlayer,
  getPlayer,
  updatePlayer,
  deletePlayer,
} from '../controllers/playerController.js';

const router = express.Router();

router.route('/').get(getAllPlayers).post(createPlayer);
router.route('/:id').get(getPlayer).patch(updatePlayer).delete(deletePlayer);

export default router;
