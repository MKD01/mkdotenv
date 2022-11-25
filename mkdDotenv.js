const { readFileSync } = require("fs");

const mkdDotenv = {};

mkdDotenv.config = (path = `${__dirname}/.env`) => {
  const envFile = readFileSync(path).toString();

  const keyValuePairs = envFile.split("\n");

  keyValuePairs.forEach((keyValuePair) => {
    const envKey = [keyValuePair.split("=")[0]];
    const envValue = keyValuePair.split("=")[1];

    process.env[envKey] = envValue;
  });
};

module.exports = mkdDotenv;
