# forum-rest-apis
Rest APIs used to forum dicsussion 

# Step 1: Generate node_modules
npm install

# Step 2: Generate Prisma Client
npx prisma generate --schema=./src/prisma/schema.prisma

# Step 2: Push schema to DB
npx prisma db push --schema=./src/prisma/schema.prisma
