const request = require('supertest');
const app = require('../app');

describe('Authentication and Authorization Tests', () => {
  let apiKey: any;

  it('should return 201 when a user signs up with valid credentials', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        email: 'example@example.com',
        password: 'password',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', 'User created successfully');
  });

  it('should generate an API key for the signed-up user', async () => {
    const response = await request(app)
      .post('/generate-api-key')
      .send({
        email: 'example@example.com',
        password: 'password',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('apiKey');
    apiKey = response.body.apiKey;
  });

  it('should return 200 when a user logs in with valid API key', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        apiKey: apiKey,
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Login successful');
  });

  it('should verify the user\'s API key', async () => {
    const response = await request(app)
      .post('/verify-api-key')
      .send({
        apiKey: apiKey,
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('verified', true);
  });

  it('should return 200 when accessing a protected route with a valid API key', async () => {
    const response = await request(app)
      .get('/protected-route')
      .set('x-api-key', apiKey);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Access granted');
  });

  it('should return 401 when accessing a protected route without an API key', async () => {
    const response = await request(app).get('/protected-route');

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('message', 'Unauthorized');
  });

  it('should return 401 when accessing a protected route with an invalid API key', async () => {
    const response = await request(app)
      .get('/protected-route')
      .set('x-api-key', 'invalid-api-key');

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('message', 'Unauthorized');
  });
});
