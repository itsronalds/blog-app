import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const createJWT = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  });

export const verifyJWT = (token) => jwt.verify(token, process.env.JWT_SECRET);
