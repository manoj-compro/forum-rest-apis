const { DataTypes } = require('sequelize');
// Define the Thread model
const Thread = (sequelize) => {
  return sequelize.define('Thread', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT
    }
  });
}

module.exports = Thread;
