const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: dataTypes.INTEGER,
      notNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: dataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id', 
      },
    },
    tag_id: {
      type: dataYtpes.INTEGER,
      references: {
        model: 'Tag',
        key: 'id'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
