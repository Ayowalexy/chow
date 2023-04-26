import { ConfigParams } from './types';

export const mongodb: ConfigParams = {
  uri: process.env.MONGO_PATH || 'mongodb+srv://DannyPhlayme:B5Ai14SFTdWEIVDM@chow.fl7chen.mongodb.net/?retryWrites=true&w=majority',
  host: process.env.MONGO_HOST || 'localhost',
  username: process.env.MONGO_USERNAME || 'admin',
  password: process.env.MONGO_PASSWORD || 'password',
  port: process.env.MONGO_PORT || '27017',
  database: process.env.MONGO_DATABASE || 'chow',
};


console.log(mongodb)