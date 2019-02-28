'use strict';
module.exports = (sequelize, DataTypes) => {
  const Symptom = sequelize.define('Symptom', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    drugId: DataTypes.INTEGER,
    drugName : DataTypes.STRING,
    price : DataTypes.INTEGER,
    brandName : DataTypes.STRING
  }, {});
  Symptom.associate = function(models) {
    Symptom.belongsToMany(models.User, {through : models.UserSymptom})
  };
  return Symptom;
};