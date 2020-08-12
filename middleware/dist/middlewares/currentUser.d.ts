import { Request, Response, NextFunction } from 'express';
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload.IShape;
        }
    }
}
export declare const currentUser: (contract: any) => (req: Request, res: Response, next: NextFunction) => void;
