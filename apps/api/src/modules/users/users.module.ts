import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schema/users.schema';
import { UsersService } from './users.service';
import { UserRepository } from './repos/user.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService, UserRepository],
  controllers: [UsersController],
})
export class UsersModule {}
