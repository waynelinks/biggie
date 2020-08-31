import { Request, Response, NextFunction } from 'express';
interface IUserPayload {
    _id?: string;
    name?: string;
    email: string;
}
declare global {
    namespace Express {
        interface Request {
            currentUser?: IUserPayload;
        }
    }
}
export declare const currentUser: (req: Request, res: Response, next: NextFunction) => void;
export {};
