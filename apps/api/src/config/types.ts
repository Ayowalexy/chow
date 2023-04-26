export interface ConfigParams {
  uri?: string;
  host?: string;
  username?: string;
  password?: string;
  port?: string;
  database?: string;
}

export interface DbConfig {
  mongo?: {
    options: ConfigParams;
  };
  mysql?: {
    options: ConfigParams;
  };
}
