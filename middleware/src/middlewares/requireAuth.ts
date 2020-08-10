import { Request, Response, NextFunction } from 'express';
import { UnAuthorizedError } from '@bigoncloud/errors'

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.currentUser) throw new UnAuthorizedError()

  next()
}
