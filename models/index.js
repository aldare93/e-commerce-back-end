// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {

});

// Categories have many Products
Category.hasMany(Product, {

});

// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tags, {
  through: ProductTag,
  as: 'products',
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Products, {
  through: PRoductTag,
  as: 'products',
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
