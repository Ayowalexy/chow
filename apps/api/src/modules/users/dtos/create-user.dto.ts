import { BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Validate,
  IsEnum,
} from 'class-validator';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { ShirtSize } from '@chow/shared';

@ValidatorConstraint({ name: 'isPhoneNumberValid', async: false })
class IsPhoneNumberValid implements ValidatorConstraintInterface {
  validate(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException({
        message: 'No phone number provided',
        data: {
          status: 'You must provide a phone number',
        },
      });
    }

    if (!isValidPhoneNumber(phoneNumber, 'NG')) {
      throw new HttpException(
        'Please provide a valid phone number',
        HttpStatus.BAD_REQUEST
      );
    }

    return true;
  }
}

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  foodInterest: string;

  @ApiProperty()
  @Validate(IsPhoneNumberValid)
  phoneNumber: string;

  @ApiProperty({ enum: ShirtSize })
  @IsEnum(ShirtSize)
  @IsNotEmpty()
  shirtSize: ShirtSize;
}
