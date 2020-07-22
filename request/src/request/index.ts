import request from 'supertest'

export default (app: any, url: string, data: any, statusCode: number) => (
  request(app)
    .post(`${process.env.BASE_API}/${url}`)
    .send(data)
    .expect(statusCode)
)