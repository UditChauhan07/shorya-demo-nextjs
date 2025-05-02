
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || 'yoursecret';

export function signToken(payload: any) {
  return jwt.sign(payload, SECRET, { expiresIn: '1h' });
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET);
}
