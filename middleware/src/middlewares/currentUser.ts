import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface UserPayload {
  id: string
  name: string
  email: string
  role: string
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.session?.jwt) return next()

  try {
    const payload = verify(
      req.session.jwt,
      process.env.JWT_SECRET!,
    ) as UserPayload

    req.currentUser = payload
  } catch (err) {}

  return next()
}
