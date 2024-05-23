"use strict";
import { Model, DataTypes, UUIDV4 } from "sequelize";
import connectSequelize from "../config/db.config";

class Admin extends Model {
  public adminId?: string;
  public email!: string;
  public password!: string;
  static associate(models: any) {}
}
Admin.init(
  {
    adminId: { type: DataTypes.UUID, primaryKey: true, defaultValue: UUIDV4 },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: connectSequelize,
    modelName: "Admin",
    tableName: "Ratings",
    timestamps: true,
  }
);

export default Admin;
