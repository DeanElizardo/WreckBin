import crypto from 'crypto';
import * as dotenv from 'dotenv';

dotenv.config();

export function generateID() {
  return crypto.randomBytes(+process.env.ID_SIZE).toString("hex");
}
