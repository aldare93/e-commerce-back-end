// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: dataTypes.INTEGER,
      notNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: dataTypes.STRING,
      notNull: false
    },
    price: {
      type: dataType.DECIMAL(10,2),
      notNull: false,
      validate: {
        IsDecimal: true
      },
    },
    stock: {
      type: dataTypes.INTEGER,
      notNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      },
    },
    category_id: {
      type: dataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
