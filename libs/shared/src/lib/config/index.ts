import { ConfigType } from './types';

const development: ConfigType = {
  environment: 'development',
  general: {
    baseURL: 'http://localhost:6000',
  },
};

const staging: ConfigType = {
  environment: 'staging',
  general: {
    baseURL: `https://eximias-api.herokuapp.com`,
  },
};

const production: ConfigType = {
  environment: 'production',
  general: {
    baseURL: `https://eximias-api.herokuapp.com`,
  },
};

let config: ConfigType;

console.log(process.env['NODE_ENV']);

switch (process.env['NODE_ENV']) {
  case development.environment:
    config = development;
    break;
  case staging.environment:
    config = staging;
    break;
  case production.environment:
    config = production;
    break;
  default:
    config = development;
    break;
}

export default config;
