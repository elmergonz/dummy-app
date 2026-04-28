const startServer = require('./server');

describe('Server', () => {

    it('should start and respond on a port', async () => {
        const { app, server } = startServer(0);

        const request = require('supertest');

        const res = await request(app).get('/');

        expect(res.statusCode).toBe(200);

        server.close();
    });

});