import { Router } from 'express';
import { createUser, getUserById, getUsers } from '../controllers/userControllers';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();

// Protect these routes using the middleware
router.get('/', authenticateToken, getUsers);
router.get('/:id', authenticateToken, getUserById);
router.post('/', authenticateToken, createUser);

export default router;
