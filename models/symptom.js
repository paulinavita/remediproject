'use strict';
module.exports = (sequelize, DataTypes) => {
  const Symptom = sequelize.define('Symptom', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    DrugId: DataTypes.INTEGER
  }, {});
  Symptom.associate = function(models) {

  };
  return Symptom;
};