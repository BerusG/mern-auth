import { config } from "dotenv";
config();

export const DB = process.env.MONGODB;
export const SECRET = process.env.TOKEN_SECRET;
export const PORT = process.env.PORT;