import request from 'supertest'
import { Express } from 'express'

export const test = (app: Express, url: string, data: string | object, statusCode: number) => {
  return request(app)
    .post(url)
    .send(data)
    .expect(statusCode)
}
