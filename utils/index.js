import { config } from 'dotenv';

config();

export const TOKEN = process.env.tokenFuzzy;
export const CLIENT_ID = process.env.clientIdFuzzy;
export const APPWRITE_API_KEY = process.env.appwriteApiKey;
