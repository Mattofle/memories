/* eslint-disable no-console */
const express = require('express');
// const { register, login } = require('../models/users');
const { login } = require('../models/users');

const router = express.Router();

/* Register a user */
router.post('/register', async (req, res) => {
  console.log('Register request body:', req.body);
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!username || !password) return res.sendStatus(400); // 400 Bad Request

  console.log('Register user:', { username, password });

  // const authenticatedUser = await register(username, password);

  // if (!authenticatedUser) return res.sendStatus(409); // 409 Conflict

  // return res.json(authenticatedUser);
  return res.sendStatus(501); // 501 Not Implemented
});

/* Login a user */
router.post('/login', async (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!username || !password) return res.sendStatus(400); // 400 Bad Reques

  const authenticatedUser = await login(username, password);

  if (!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized

  return res.json(authenticatedUser);
});

module.exports = router;
