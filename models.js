const { Sequelize, DataTypes } = require('sequelize');

// File-based SQLite database (persistent)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/forum.sqlite', // ✅ Persistent file path
});

// Define the User model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
});

// Define the Post model
const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
});

// RelationshipType

// User has many Posts
User.hasMany(Post, {
  foreignKey: 'userId',
  as: 'posts',
});

// Post belongs to User
Post.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

module.exports = {
  sequelize,
  User,
  Post,
};