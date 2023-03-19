import { DataTypes, Sequelize } from "sequelize";

import { envConfig } from "@config/env";

const sequelize = new Sequelize(envConfig.DATABASE_URL);

async function connectDB() {
  try {
    await sequelize.authenticate();
    // eslint-disable-next-line no-console
    console.log("✅ Connection has been established successfully.");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Unable to connect to the database:", error);
  }
}

export { connectDB, DataTypes, Sequelize, sequelize };
