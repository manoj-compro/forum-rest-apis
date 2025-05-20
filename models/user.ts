const { DataTypes } = require('sequelize');

// Define the User model
const User = (sequelize)=> {
  const UserModel = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Hide password in API responses
  UserModel.prototype.toJSON = function () {
    const values = { ...this.get() };
    delete values.password;
    delete values.createdAt;
    delete values.updatedAt;
    
    return values;
  };

  return UserModel;
}

module.exports = User;