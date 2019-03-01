'use strict';
module.exports = (sequelize, DataTypes) => {
  const DrugSymptom = sequelize.define('DrugSymptom', {
    DrugId: DataTypes.INTEGER,
    SymptomId: DataTypes.INTEGER
  }, {});
  DrugSymptom.associate = function(models) {
    // associations can be defined here
  };
  return DrugSymptom;
};