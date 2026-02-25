import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { connectDB } from '../src/model/db.connect.js';

await connectDB();

const port = process.env.port;

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})

  