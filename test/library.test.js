const request = require('supertest');
const app = require('../app');
describe('Post Libs', () => {
  test('Doit créer un nouveau livre', async () => {
    const res = await request(app)
      .post('/books')
      .send({ 
        id: 4, 
        titre: 'gergerg', 
        date: "02-10-2002" 
    })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  })
})