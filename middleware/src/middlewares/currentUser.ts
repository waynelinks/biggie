/* eslint-disable @typescript-eslint/no-namespace */
import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IUserPayload {
  id: string
  firstname: string
  lastname: string
  email: string
  role: string
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
): void => {
  if (!req.session?.jwt) {
    return next()
  }

  try {
    const payload = verify(
      req.session.jwt,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      process.env.ACCESS_TOKEN_SECRET!,
    ) as IUserPayload
    req.currentUser = payload
  // eslint-disable-next-line no-empty
  } catch (err) {}

  return next()
}
