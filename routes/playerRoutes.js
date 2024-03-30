import { Router } from 'express';
import {
  getAllPlayers,
  createPlayer,
  getPlayer,
  updatePlayer,
  deletePlayer,
} from '../controllers/playerController.js';
import {
  validatePlayerInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';

const router = Router();

router.route('/').get(getAllPlayers).post(validatePlayerInput, createPlayer);
router
  .route('/:id')
  .get(validateIdParam, getPlayer)
  .patch(validatePlayerInput, validateIdParam, updatePlayer)
  .delete(validateIdParam, deletePlayer);

export default router;
