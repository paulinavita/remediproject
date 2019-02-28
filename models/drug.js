'use strict';
module.exports = (sequelize, DataTypes) => {
  const Drug = sequelize.define('Drug', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Drug.associate = function(models) {
    

  };
  return Drug;
};