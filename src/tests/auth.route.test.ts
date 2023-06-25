import request from 'supertest';
import app from '../../app';

describe('Authentication Routes', () => {
  it('should return 201 and user data when signup is successful', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        email: 'test@example.com',
        password: 'password123',
        first_name: 'John',
        last_name: 'Doe',
        retype_password: 'password123',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', 'Signup successful. Welcome');
    expect(response.body).toHaveProperty('user');
    expect(response.body).toHaveProperty('notice');
    expect(response.body).toHaveProperty('API_key');
  });

  it('should return 401 when API key is invalid', async () => {
    const response = await request(app)
      .post('/verify')
      .send({
        email: 'test@example.com',
        password: 'password123',
        API_key: 'invalid_api_key',
      });

    expect(response.status).toBe(401);
    expect(response.text).toBe('Invalid API key, please check that you are using your own API key and try again');
  });
});
