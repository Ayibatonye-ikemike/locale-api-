import request from 'supertest';
import app from '../../app';

// location.route.test.ts
const port = 3002; // Change the port number to 3002 or any other available port

// ...

beforeAll(async () => {
  await connectMongoDB();
  app.listen(port, (): void => {
    console.log(`Server listening on port ${port}`);
  });
});

// ...


describe('Authentication Routes', () => {
  describe('POST /signup', () => {
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

    it('should return 400 when passwords do not match', async () => {
      const response = await request(app)
        .post('/signup')
        .send({
          email: 'test@example.com',
          password: 'password123',
          first_name: 'John',
          last_name: 'Doe',
          retype_password: 'differentpassword',
        });

      expect(response.status).toBe(400);
      expect(response.text).toBe('Passwords do not match');
    });

    // Add more test cases for different scenarios
  });

  describe('POST /verify', () => {
    it('should return 200 when API key is verified successfully', async () => {
      const response = await request(app)
        .post('/verify')
        .send({
          API_key: 'Umfs92OnouirxpDLqBtUlHw0ZkLgMI91',
          email: 'ijawpikin@gmail.com',
          password: '1993',
        });

      expect(response.status).toBe(200);
      expect(response.text).toBe('API key has been verified and is valid');
    });

    it('should return 401 when API key is invalid', async () => {
      const response = await request(app)
        .post('/verify')
        .send({
          API_key: 'invalid-api-key',
          email: 'test@example.com',
          password: 'password123',
        });

      expect(response.status).toBe(401);
      expect(response.text).toBe('Invalid API key, please check that you are using your own API key and try again');
    });

    // Add more test cases for different scenarios
  });
});
function connectMongoDB() {
  throw new Error('Function not implemented.');
}

