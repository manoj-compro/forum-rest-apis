const { DataTypes } = require('sequelize');
// Define the Post model
const Post = (sequelize) => {
  return sequelize.define('Post', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    threadId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });
}

module.exports = Post;
