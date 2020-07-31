import request from 'supertest';
import { Express } from 'express';
export declare const test: (app: Express, url: string, data: string | object, statusCode: number) => request.Test;
