"use strict";
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  development: {
    database: "ecommerce",
    username: "postgres",
    password: "galaxy",
    dialect: "postgres",
  },
  test: {
    url: process.env.DATABASE_TEST_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: true,
      },
    },
  },
  production: {
    url: process.env.DATABASE_PRODUCTION_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: true,
      },
    },
  },
};
