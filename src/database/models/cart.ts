"use strict";
import { DataType, Model } from "sequelize-typescript";
import connectSequelize from "../config/db.config";
class Cart extends Model {
  static associate(models: any) {
    Cart.hasMany(models.cartItem, {
      foreignKey: "cartId",
      as: "cartItems",
    });
  }
}
Cart.init(
  {
    cartId: { type: DataType.NUMBER, primaryKey: true, autoIncrement: true },
    userId: { type: DataType.NUMBER, allowNull: false },
  },
  {
    sequelize: connectSequelize,
    modelName: "Cart",
    tableName: "Carts",
  }
);

export default Cart;
