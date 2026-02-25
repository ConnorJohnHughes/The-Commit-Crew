import mysql2 from 'mysql2/promise';
import chalk from 'chalk';

export let connection;

export const connectDB = async () => {
  try {
    connection = await mysql2.createConnection({
      host: process.env.DB_HOSTNAME,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    });

    console.log(chalk.blue("----------------------Connected to Database-----------------------------"));
  } catch (err) {
    console.log(chalk.red("Database connection failed"));
    console.error(err);
  }
};  