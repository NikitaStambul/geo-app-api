import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const { DB_URL } = process.env;

console.log({DB_URL});

export const sequelize = new Sequelize(DB_URL, {
  dialect: 'postgres'
});


try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
};

sequelize.sync({ alter: true });