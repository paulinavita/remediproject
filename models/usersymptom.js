'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserSymptom = sequelize.define('UserSymptom', {
    UserId: DataTypes.INTEGER,
    SymptomId: DataTypes.INTEGER
  }, {});
  UserSymptom.associate = function(models) {
    // associations can be defined here
  };
  return UserSymptom;
};