'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      // validate: {
      //   isUnique(value) {
      //     return User.findOne({
      //       where: {
      //         username: value,
      //         id: {[Op.ne]: this.id}
      //       }
      //     })
      //     .then((data) => {
      //       if(data !== null) {
      //         throw new Error('Validation error: username is same')
      //       }
      //     })
      //     .catch((err) => {
      //       throw new Error(err)
      //     })
      //   }
      // }
    },
    password: DataTypes.STRING,
    gender: {
      type: DataTypes.ENUM,
      values: ['female', 'male']
    },
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Validation error: email is same'
        }
      }
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};