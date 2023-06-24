import request from 'supertest';
// Rest of the test code...
import app from '../../app'; // Assuming you have your Express app configured in a separate file called 'app.ts'
  

describe('Region, State, and Local Government Routes', () => {
    
  let token: string; // Store the valid token here
  
    beforeAll(() => {
      // Get a valid token for authentication
      // You can obtain the token from your authentication mechanism
      token = 'Umfs92OnouirxpDLqBtUlHw0ZkLgMI91';
    });
  
    it('should get a specific region', async () => {
      const response = await request(app)
        .get('/location/region')
        .set('Authorization', `Bearer ${token}`); // Add the Authorization header
  
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('region');
      expect(response.body.region).toBe(true);
    });
  
    // Rest of your tests...

    beforeAll(() => {
      // Get a valid token for authentication
      // You can obtain the token from your authentication mechanism
      token = 'Umfs92OnouirxpDLqBtUlHw0ZkLgMI91';
    });
  
  // Test for getting a specific state within a region

    it('should get a specific state', async () => {
      const response = await request(app)
        .get('/location/state')
        .set('Authorization', `Bearer ${token}`); // Add the Authorization header
  
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('state');
      expect(response.body.region).toBe(true);
    });
  
  // Test for getting a specific local government within a state



  it('should get a specific state', async () => {
    const response = await request(app)
      .get('/location/lga')
      .set('Authorization', `Bearer ${token}`); // Add the Authorization header

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('lga');
    expect(response.body.lgas).toBe(true);
  });
});
