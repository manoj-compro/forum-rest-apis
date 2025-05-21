const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Forum API',
      version: '1.0.0',
      description: 'REST API for the forum project',
    },
    servers: [{ url: 'http://localhost:3000' }],
    tags: [
      { name: 'Auth', description: 'Auth management' },
      { name: 'Users', description: 'User management' },
      { name: 'Threads', description: 'Thread management' },
      { name: 'Posts', description: 'Post management' },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ['src/docs/*.ts'], // Changed from routes to docs
};

export default options;