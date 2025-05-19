const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const databaseURL = process.env.DATABASE_URL || 'db/forum.sqlite';

// File-based SQLite database (persistent)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `./${databaseURL}`, // ✅ Persistent file path
});

// Import models
const User = require('./user')(sequelize);
const Thread = require('./thread')(sequelize);
const Post = require('./post')(sequelize);

// Define relationships
// User has many Threads
User.hasMany(Thread, {
  foreignKey: 'userId',
  as: 'threads',
});
// Thread belongs to User
Thread.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});
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
// Thread has many Posts
Thread.hasMany(Post, {
  foreignKey: 'threadId',
  as: 'posts',
});
// Post belongs to Thread
Post.belongsTo(Thread, {
  foreignKey: 'threadId',
  as: 'thread',
});

// Export the models and sequelize instance
module.exports = {
  sequelize,
  User,
  Thread,
  Post,
};