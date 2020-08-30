import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IUserPayload {
  _id?: string
  name?: string
  email: string
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: IUserPayload
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
      process.env.ACCESS_TOKEN_SECRET!,
    ) as IUserPayload

    req.currentUser = payload
  } catch (err) {}

  return next()
}
