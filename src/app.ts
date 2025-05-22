import express from 'express';
import cors from 'cors';
import passport from 'passport';

import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerOptions from './swagger';

import routes from '~/routes';
import passportConfig from '~/configs/passport';

const app = express();

app.use(cors());
app.use(express.json());

app.use(passport.initialize());
passportConfig(passport);

app.use('/api', routes);

const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;