/**
 * @swagger
 * components:
 *   schemas:
 *     Thread:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         userId:
 *           type: integer
 *           description: The ID of the user who created the thread
 *         title:
 *           type: string
 *           description: Title of the thread
 *         body:
 *           type: string
 *           description: Body/content of the thread
 *       example:
 *         userId: 1
 *         title: "How to deploy Node.js on AWS?"
 *         body: "I'm new to AWS and wondering how to deploy my Express app."
 */

/**
 * @swagger
 * tags:
 *   name: Threads
 *   description: Forum thread management routes
 */

/**
 * @swagger
 * /api/threads:
 *   post:
 *     summary: Create a new thread
 *     tags: [Threads]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Thread'
 *     responses:
 *       201:
 *         description: Thread created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Thread'
 *
 *   get:
 *     summary: Get all threads
 *     tags: [Threads]
 *     responses:
 *       200:
 *         description: List of all threads
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Thread'
 */

/**
 * @swagger
 * /api/threads/{id}:
 *   get:
 *     summary: Get a thread by ID
 *     tags: [Threads]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the thread
 *     responses:
 *       200:
 *         description: The requested thread
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Thread'
 *       404:
 *         description: Thread not found
 *
 *   put:
 *     summary: Update a thread by ID
 *     tags: [Threads]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the thread
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Thread'
 *     responses:
 *       200:
 *         description: Thread updated successfully
 *
 *   delete:
 *     summary: Delete a thread by ID
 *     tags: [Threads]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the thread
 *     responses:
 *       204:
 *         description: Thread deleted successfully
 */
