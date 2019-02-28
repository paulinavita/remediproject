'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      validate : {
        unique(username) {
          return User.findOne(
            { where : { id : {[sequelize.Op.ne] : this.id}, username : username}})
           .then ((one) => {
             if (one !== null) {
               throw new Error ('Duplicate Username')
             }
           })
           .catch(err => {
             throw err
           })
         }
      }
    },
    password: DataTypes.STRING,
    gender: {
      type: DataTypes.ENUM,
      values: ['female', 'male']
    },
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate : {
        is :  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
        unique(email) {
          return User.findOne(
            { where : { id : {[sequelize.Op.ne] : this.id}, email : email}})
           .then ((one) => {
             if (one !== null) {
               throw new Error ('Duplicate Email')
             }
           })
           .catch(err => {
             throw err })
          }
        }
      }
    }, {
      hooks : {
        beforeCreate(User, options){
          User.firstName = User.firstName[0].toUpperCase() + User.firstName.slice(1).toLowerCase()
          User.lastName = User.lastName[0].toUpperCase() + User.lastName.slice(1).toLowerCase()
          User.email = User.email.toLowerCase()
        }
      }
    });
  User.associate = function(models) {
    User.belongsToMany(models.Symptom, {through : models.UserSymptom})
  };
  return User;
};