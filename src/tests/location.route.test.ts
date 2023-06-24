import request from 'supertest';
import app from '../../app';

// auth.route.test.ts
const port = 3001; // Change the port number to 3001 or any other available port

// ...

beforeAll(async () => {
  await connectMongoDB();
  app.listen(port, function (): void {
      console.log(`Server listening on port ${port}`);
    });
});

// ...


describe('Location Routes', () => {
  describe('GET /region', () => {
    it('should return 200 and call getRegions controller with auth middleware', async () => {
      const getRegionsMock = jest.fn();

      jest.doMock('../controller/location.controller', () => ({
        getRegions: getRegionsMock,
      }));

      const locationRouter = require('../routes/location.route');

      const response = await request(app).get('/region');

      expect(response.status).toBe(200);
      expect(getRegionsMock).toHaveBeenCalled();
    });

    // Add more test cases for different scenarios
  });

  describe('GET /state', () => {
    it('should return 200 and call getState controller with auth middleware', async () => {
      const getStateMock = jest.fn();

      jest.doMock('../controller/location.controller', () => ({
        getState: getStateMock,
      }));

      const locationRouter = require('../routes/location.route');

      const response = await request(app).get('/state');

      expect(response.status).toBe(200);
      expect(getStateMock).toHaveBeenCalled();
    });

    // Add more test cases for different scenarios
  });

  describe('GET /lga', () => {
    it('should return 200 and call getLocalGvt controller with auth middleware', async () => {
      const getLocalGvtMock = jest.fn();

      jest.doMock('../controller/location.controller', () => ({
        getLocalGvt: getLocalGvtMock,
      }));

      const locationRouter = require('../routes/location.route');

      const response = await request(app).get('/lga');

      expect(response.status).toBe(200);
      expect(getLocalGvtMock).toHaveBeenCalled();
    });

    // Add more test cases for different scenarios
  });

  // Add more tests for other routes if needed
});


function connectMongoDB() {
  throw new Error('Function not implemented.');
}

