import request from 'supertest';
import app from '../../app';

describe('Location Routes', () => {
  it('should return 200 and regions data when querying regions', async () => {
    const response = await request(app).get('/regions?region_name=Region1, Region2&lga=true');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('regions');
    // Add more assertions for the response body if needed
  });

  it('should return 404 and error message when querying regions with invalid region names', async () => {
    const response = await request(app).get('/regions?region_name=InvalidRegion1, InvalidRegion2');

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error');
    expect(response.body).toHaveProperty('region');
    // Add more assertions for the response body if needed
  });

  it('should return 200 and states data when querying states', async () => {
    const response = await request(app).get('/states?state_name=State1, State2&lga=true');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('states');
    // Add more assertions for the response body if needed
  });

  it('should return 404 and error message when querying states with invalid state names', async () => {
    const response = await request(app).get('/states?state_name=InvalidState1, InvalidState2');

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error');
    expect(response.body).toHaveProperty('state');
    // Add more assertions for the response body if needed
  });

  it('should return 200 and LGAs data when querying LGAs', async () => {
    const response = await request(app).get('/lgas?lga_name=LGA1, LGA2');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('lgas');
    // Add more assertions for the response body if needed
  });

  it('should return 404 and error message when querying LGAs with invalid LGA names', async () => {
    const response = await request(app).get('/lgas?lga_name=InvalidLGA1, InvalidLGA2');

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message');
    // Add more assertions for the response body if needed
  });

  // Add more tests as needed for different scenarios
});
