import { Request, Response, NextFunction } from 'express';
interface IUserPayload {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    role: string;
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
