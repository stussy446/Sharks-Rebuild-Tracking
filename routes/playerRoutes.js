import { Router } from 'express';
import {
  getAllPlayers,
  createPlayer,
  getPlayer,
  updatePlayer,
  deletePlayer,
} from '../controllers/playerController.js';

const router = Router();

router.route('/').get(getAllPlayers).post(createPlayer);
router.route('/:id').get(getPlayer).patch(updatePlayer).delete(deletePlayer);

export default router;
