import { Sequelize } from "sequelize";
import connectSequelize from "./config/db.config";

const connectDb = async () => {
  try {
    connectSequelize.authenticate();
    console.log("Connected To Database Successfully");
  } catch (error) {
    console.error("Failed To Connect to the database : ", error);
  }
};

export default connectDb;
