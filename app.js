const express = require('express');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const { sequelize, User, Post } = require('./models');


const app = express();
app.use(cors());
app.use(express.json());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'User and Post API',
      version: '1.0.0',
      description: 'API for managing users and posts',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./index.js', './swaggerDocs.js']
};


const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});


app.post('/users', async (req, res) => {
  const user = await User.create({name: req.body.name, email: req.body.email});
  res.json(user);
});
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post('/posts', async (req, res) => {
  const post = await Post.create({title: req.body.title, content: req.body.content, userId: req.body.userId});
  res.json(post);
});

app.get('/posts', async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('http://localhost:3000');
})