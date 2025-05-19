const express = require('express');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const { sequelize } = require('./models');

const routes = require('./routes');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

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
  apis: ['./app.js', './swaggerDocs.js']
};


const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



// sequelize.sync({ force: true }).then(() => {
//   console.log('Database & tables created!');
// });



module.exports = app;