/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: The created user
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 */

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               userId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: The created post
 *   get:
 *     summary: Get all posts
 *     responses:
 *       200:
 *         description: List of posts
 */