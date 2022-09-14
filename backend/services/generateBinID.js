const crypto = require('crypto');
const dotenv = require('dotenv');

dotenv.config();

function generateID() {
  return crypto.randomBytes(+process.env.ID_SIZE).toString("hex");
}

module.exports = { generateID };
