import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 4000;

async function main() {
  await app.listen(PORT);

  console.log(`Server workin on port ${PORT}`);
}

main();
