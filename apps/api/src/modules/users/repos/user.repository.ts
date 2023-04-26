import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schema/users.schema';
import { BaseRepository } from '../../../helpers/database/base.repository';

export class UserRepository extends BaseRepository<User> {
  constructor(
    @InjectModel(User.name)
    userModel: Model<User>
  ) {
    super(userModel);
  }
}
