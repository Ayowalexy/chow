import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbConfig } from '../../config/types';
import { environment } from '../../environments/environment';
import { UsersModule } from '../users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRootAsync({
      useFactory: async () => {
        const dbConfig: DbConfig = environment.getDbConfig();
        const database = dbConfig.mongo.options.database;
        const uri = dbConfig.mongo.options.uri;

        return {
          uri,
          dbName: database,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
