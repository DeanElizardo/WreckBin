const crypto = require('crypto');
const dotenv = require('dotenv');

dotenv.config();

const binIdSize = +process.env.BIN_ID_SIZE;
const sessionSecretSize = +process.env.SESSION_SECRET_SIZE;
const userIdSize = +process.env.USER_ID_SIZE;

const genHexString = (stringSize) => crypto.randomBytes(stringSize).toString("hex");

function genBinID() {
  return genHexString(binIdSize);
}

function genUserID() {
  return genHexString(userIdSize);
}

function genSessionSecret() {
  return genHexString(sessionSecretSize);
}

module.exports = {
  genBinID,
  genSessionSecret,
  genUserID,
};
