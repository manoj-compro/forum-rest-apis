/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterUserInput:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: User's full name
 *         email:
 *           type: string
 *           format: email
 *           description: User's unique email address
 *         password:
 *           type: string
 *           description: User's password
 *       example:
 *         name: "John Doe"
 *         email: "john@example.com"
 *         password: "password123"
 * 
 *     RegisterUserResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: User's unique identifier
 *         name:
 *           type: string
 *           description: User's full name
 *         email:
 *           type: string
 *           format: email
 *           description: User's unique email address
 *       example:
 *         id: 1
 *         name: "John Doe"
 *         email: "john@example.com"
 * 
 *     LoginUserInput:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: john@example.com
 *         password:
 *           type: string
 *           format: password
 *           example: password123
 * 
 *     LoginUserResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           description: JWT token for authentication
 *         user:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               description: User's unique identifier
 *             name:
 *               type: string
 *               description: User's full name
 *             email:
 *               type: string
 *               format: email
 *               description: User's unique email address
 *       example:
 *         token: eyJhbGciOiJIUzI1NiIsInR5cCI6
 *         user:
 *           id: 1
 *           name: "John Doe"
 *           email: "john@example.com"
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User authentication (register and login)
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterUserInput'
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterUserResponse'
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login an existing user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginUserInput'
 *     responses:
 *       200:
 *         description: Logged in successfully with JWT token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginUserResponse'
 *       401:
 *         description: Invalid credentials
 */
