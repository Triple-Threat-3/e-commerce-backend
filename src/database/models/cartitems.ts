"use strict";
import { DataType, Model } from "sequelize-typescript";
import connectSequelize from "../config/db.config";

class CartItems extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: any) {
    // define association here
  }
}
CartItems.init(
  {
    cartId: {
      type: DataType.NUMBER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: DataType.NUMBER,
    quantity: DataType.NUMBER,
    price: DataType.NUMBER,
  },
  {
    sequelize: connectSequelize,
    modelName: "CartItems",
    tableName: "cartItems",
  }
);
