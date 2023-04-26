import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserRepository } from './repos/user.repository';
import { User } from './schema/users.schema';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, phoneNumber } = createUserDto;

    const userExists = await this.userRepository.findOne({
      $or: [{ email }, { phoneNumber }],
    });

    if (userExists) {
      throw new HttpException('User exists', HttpStatus.BAD_REQUEST);
    }

    return this.userRepository.create(createUserDto);
  }

  async findAll(): Promise<Array<User>> {
    return await this.userRepository.findAll();
  }
}
