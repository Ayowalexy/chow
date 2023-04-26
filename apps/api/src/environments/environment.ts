import { mongodb } from '../config/db.config';
import { DbConfig } from '../config/types';

export const environment = {
  production: false,
  port: 8080,
  environment: 'development',
  getDbConfig(): DbConfig {
    return {
      mongo: {
        options: mongodb,
      },
    };
  },
};
