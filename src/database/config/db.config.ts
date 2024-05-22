import { Sequelize } from "sequelize";
const config = require("./config");
import dotenv from "dotenv";
dotenv.config();

const MODE: any = process.env.MODE || "development";
const dbconfig = config[MODE];

const connectSequelize: Sequelize = new Sequelize(
  dbconfig.database,
  dbconfig.username,
  dbconfig.password,
  {
    dialect: "postgres",
    dialectOptions: {},
  }
);

export default connectSequelize;
