import request from 'supertest';
// Rest of the test code...
import app from '../../app'; // Assuming you have your Express app configured in a separate file called 'app.ts'
  

describe('Region, State, and Local Government Routes', () => {
    
  let API_key: any; // Store the valid API_key here
  
    beforeAll(() => {
      // Get a valid API_key for authentication
      // You can obtain the API_key from your authentication mechanism
      API_key = 'Umfs92OnouirxpDLqBtUlHw0ZkLgMI91';
    });
  
    it('should get a specific region', async () => {
      const response = await request(app)
        .get('/location/region')
        .set('Authorization', `Bearer ${API_key}`); // Add the Authorization header
  
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('region');
      expect(response.body.region).toBe(true);
    });
  
    // Rest of your tests...

    beforeAll(() => {
      // Get a valid token for authentication
      // You can obtain the API_key from your authentication mechanism
      API_key = 'Umfs92OnouirxpDLqBtUlHw0ZkLgMI91';
    });
  
  // Test for getting a specific a region
  
  it('should get a specific region', async () => {
    const response = await request(app)
      .get('/location/region')
      .set('x-api-key', API_key); // Use 'x-api-key' header instead of 'Authorization'
  
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('region');
    expect(response.body.region).toBe(true);
  });
  
 // Test for getting a specific state 

  it('should get a specific state', async () => {
    const response = await request(app)
      .get('/location/state')
      .set('x-api-key', API_key); // Use 'x-api-key' header instead of 'Authorization'
  
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('state');
    expect(response.body.region).toBe(true);
  });
  
    // Test for getting a specific local government

  it('should get a specific local government', async () => {
    const response = await request(app)
      .get('/location/lga')
      .set('x-api-key', API_key); // Use 'x-api-key' header instead of 'Authorization'
  
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('lgas');
    expect(response.body.lgas).toBe(true);
  });
  
});
