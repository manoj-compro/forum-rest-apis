import 'module-alias/register';
import app from '~/app';
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
  console.log(`http://localhost:${PORT}`);
  console.log(`Swagger is running on http://localhost:${PORT}/api-docs`);
})