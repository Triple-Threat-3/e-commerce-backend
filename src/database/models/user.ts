"use strict";
import { DataType, Model } from "sequelize-typescript";
import connectSequelize from "../config/db.config";

class User extends Model {
  public userId?: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public status!: string;
  public wishlistId!: number;
  public cartId!: number;
  public role!: string;

  static associate(models: any) {
    User.hasOne(models.Cart, {
      foreignKey: "userId",
      as: "cart",
    });
    User.hasMany(models.Rating, {
      foreignKey: "userId",
      as: "rating",
    });
    User.hasMany(models.Wishlist, {
      foreignKey: "userId",
      as: "wislist",
    });
  }
}
User.init(
  {
    userId: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataType.STRING, allowNull: false },
    email: { type: DataType.STRING, allowNull: false },
    password: { type: DataType.STRING, allowNull: false },
    status: { type: DataType.STRING, allowNull: false, defaultValue: "active" },
    wishlistId: { type: DataType.INTEGER, allowNull: false },
    cartId: { type: DataType.INTEGER, allowNull: false },
    role: { type: DataType.STRING, allowNull: false, defaultValue: "buyer" },
  },
  {
    sequelize: connectSequelize,
    modelName: "User",
    tableName: "Users",
    timestamps: true,
  }
);
export default User;
