import request from 'supertest'

export default (app: any, url: string, data: string | object, statusCode: number) => {
  return request(app)
    .post(url)
    .send(data)
    .expect(statusCode)
}
