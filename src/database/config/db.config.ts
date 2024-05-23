import { Sequelize } from "sequelize";
const config = require("./config");
import dotenv from "dotenv";
dotenv.config();

const MODE: any = process.env.MODE || "development";
const dbconfig = config[MODE];

const connectSequelize: Sequelize = new Sequelize(
  dbconfig[`${MODE}`].url,

  {
    dialect: dbconfig[`${MODE}`].dialect,
    dialectOptions: {
      createDatabaseIfNotExist: true,
    },
  }
);

export default connectSequelize;
