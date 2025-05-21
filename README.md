# forum-rest-apis
Rest APIs used to forum dicsussion 

# Step 1: Generate node_modules
npm install

# Step 2: Generate Prisma Client
npx prisma generate

# Step 2: Push schema to DB (creates dev.db if not present)
npx prisma db push OR
npx prisma migrate dev --name init
