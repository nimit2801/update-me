import sdk from 'node-appwrite';
import { APPWRITE_API_KEY } from '../utils/index.js';
const appwriteClient = new sdk.Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64ab3bf78457c1f768f9')
  .setKey(APPWRITE_API_KEY);

export const databases = new sdk.Databases(appwriteClient);
