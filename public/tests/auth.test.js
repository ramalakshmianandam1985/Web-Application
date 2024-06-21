const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const UserManager = require('../src/models/UserManager');
const UserDatabase = require('../src/models/UserDatabase');
const authRoutes = require('../src/routes/auth');
 
const app = express();
app.use(bodyParser.json());
app.use('/', authRoutes);
 
jest.mock('../src/models/UserDatabase');
 
describe('User Authentication', () => {
  it('should register a new user', async () => {
    const response = await request(app)
      .post('/register')
      .send({ username: 'testuser', password: 'testpass' });
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('User registered successfully');
  });
 
  it('should login an existing user', async () => {
    const userManager = new UserManager();
    userManager.createUser('testuser', 'testpass');
 
    const response = await request(app)
      .post('/login')
      .send({ username: 'testuser', password: 'testpass' });
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login successful');
  });
 
  it('should change password for an existing user', async () => {
    const userManager = new UserManager();
    userManager.createUser('testuser', 'testpass');
 
    const response = await request(app)
      .post('/change-password')
      .send({ username: 'testuser', newPassword: 'newpass' });
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Password changed successfully');
  });
});