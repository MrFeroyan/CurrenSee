import * as dotenv from "dotenv";

dotenv.config();

type EnvConfigType = {
  PORT: number;
  DATABASE_URL: string;
  JWT_SECRET: string;
  CURRENCY_API_KEY: string;
};

export const getENVConfig = (): EnvConfigType => {
  const config = {
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    CURRENCY_API_KEY: process.env.CURRENCY_API_KEY,
  };

  // Add empty allowed ENV keys
  const allowedEmpty: string[] = [];

  for (const [key, value] of Object.entries(config)) {
    if (!allowedEmpty.includes(key) && (value === undefined || value === "")) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as EnvConfigType;
};

export const envConfig = getENVConfig();
