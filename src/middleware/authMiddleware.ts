import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

// Optionally, you can extend the Request type to include "user"
export interface AuthenticatedRequest extends Request {
  user?: any;
}

export const authenticateToken = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): void => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      res.status(401).json({ message: 'No token provided' });
      return;
    }
  
    jwt.verify(token, config.jwtSecret, (err, user) => {
      if (err) {
        res.status(403).json({ message: 'Invalid or expired token' });
        return;
      }
      req.user = user;
      next();
    });
  };
  
