const express = require('express');
const cors = require('cors');
const passport = require('passport');

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = require('./swagger');

const { sequelize } = require('./models');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use(passport.initialize());
require('./configs/passport')(passport);

app.use('/api', routes);

const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// sequelize.sync({ force: false }).then(() => {
//   console.log('Database & tables created!');
// });


module.exports = app;