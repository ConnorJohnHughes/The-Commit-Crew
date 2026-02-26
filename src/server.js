import dotenv from 'dotenv';
dotenv.config();

console.log("ENV CHECK", {
  PORT: process.env.PORT,
  DB_HOSTNAME: process.env.DB_HOSTNAME,
  DB_USER: process.env.DB_USER,
  DB_DATABASE: process.env.DB_DATABASE,
  HAS_DB_PASSWORD: Boolean(process.env.DB_PASSWORD)
});

import app from './app.js';
import { connectDB } from '../src/model/db.connect.js';

try {
    await connectDB();
    console.log("Database Connected");
} catch (err) {
    console.error("DB failed to connect:", err.message);
    process.exit(1);
}

const port = process.env.PORT || 8002;

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})

  