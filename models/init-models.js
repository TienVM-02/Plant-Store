var DataTypes = require("sequelize").DataTypes;
var _accounts = require("./accounts");
var _categories = require("./categories");
var _customers = require("./customers");
var _hasPlant = require("./hasPlant");
var _images = require("./images");
var _orders = require("./orders");
var _plantDetails = require("./plantDetails");
var _plants = require("./plants");
var _roles = require("./roles");

function initModels(sequelize) {
  var accounts = _accounts(sequelize, DataTypes);
  var categories = _categories(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var hasPlant = _hasPlant(sequelize, DataTypes);
  var images = _images(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var plantDetails = _plantDetails(sequelize, DataTypes);
  var plants = _plants(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);

  plants.belongsTo(categories, { as: "category", foreignKey: "categoryId"});
  categories.hasMany(plants, { as: "plants", foreignKey: "categoryId"});
  orders.belongsTo(customers, { as: "cu", foreignKey: "cusId"});
  customers.hasMany(orders, { as: "orders", foreignKey: "cusId"});
  hasPlant.belongsTo(orders, { as: "order", foreignKey: "orderId"});
  orders.hasMany(hasPlant, { as: "hasPlants", foreignKey: "orderId"});
  hasPlant.belongsTo(plants, { as: "plant", foreignKey: "plantId"});
  plants.hasMany(hasPlant, { as: "hasPlants", foreignKey: "plantId"});
  images.belongsTo(plants, { as: "plant", foreignKey: "plantId"});
  plants.hasMany(images, { as: "images", foreignKey: "plantId"});
  plantDetails.belongsTo(plants, { as: "plant", foreignKey: "plantId"});
  plants.hasMany(plantDetails, { as: "plantDetails", foreignKey: "plantId"});
  accounts.belongsTo(roles, { as: "role", foreignKey: "roleId"});
  roles.hasMany(accounts, { as: "accounts", foreignKey: "roleId"});

  return {
    accounts,
    categories,
    customers,
    hasPlant,
    images,
    orders,
    plantDetails,
    plants,
    roles,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
